package com.example.backend.controllers;

import java.math.BigDecimal;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.mappers.RezervacijaMapper;
import com.example.backend.mappers.StolMapper;
import com.example.backend.models.RadnoVreme;
import com.example.backend.models.Rezervacija;
import com.example.backend.models.Stol;
import com.example.backend.modelsDTO.RezervacijaDTO;
import com.example.backend.modelsDTO.Statistika1DTO;
import com.example.backend.modelsDTO.Statistika2DTO;
import com.example.backend.modelsDTO.Statistika3DTO;
import com.example.backend.modelsDTO.StolDTO;
import com.example.backend.repository.RadnoVremeRepository;
import com.example.backend.repository.RezervacijaRepository;
import com.example.backend.repository.StolRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/rezervacija")
@CrossOrigin( origins = "http://localhost:4200/")
public class RezervacijaController {

    @Autowired
    private  RezervacijaMapper rezervacijaMapper;

    @Autowired
    private RezervacijaRepository rezervacijaRepository;

    @Autowired
    private RadnoVremeRepository radnoVremeRepository;

    @Autowired
    private StolRepository stolRepository;

    @Autowired
    private StolMapper stolMapper;

    // pomocna metoda
    public static int vratiDanUNedelji(LocalDateTime dateTime) {
        DayOfWeek dayOfWeek = dateTime.getDayOfWeek();
        return dayOfWeek.getValue();
    }

    // moram da proverim
    @PostMapping("/dodajRezervaciju")
    public String dodajRezervaciju(@RequestBody RezervacijaDTO r) {
        int dan_u_nedelji = vratiDanUNedelji(r.getPocetak());
        RadnoVreme radnoVreme = this.radnoVremeRepository.dohvatiRadnoVreme(r.getRestoran().getId(), dan_u_nedelji);
        if(radnoVreme == null){
            return "Restoran ovog dana ne radi";
        }
        r.setPocetak(r.getPocetak().plusHours(2));
        r.setKraj(r.getKraj().plusHours(2));
        LocalTime rezPocetak = r.getPocetak().toLocalTime();
        if(rezPocetak.isBefore(radnoVreme.getPocetak())){
            return "Restoran se otvara u " + radnoVreme.getPocetak().toString();
        }
        if(rezPocetak.getHour() > 21 || rezPocetak.getHour()==21 && rezPocetak.getMinute() >0){
            return "Sve rezervacije se moraju zakazati do 21h";
        }
        LocalTime rezKraj = r.getKraj().toLocalTime();
        //if(rezKraj.isAfter(radnoVreme.getKraj())){
        if(rezKraj.getHour() > radnoVreme.getKraj().getHour() || rezKraj.getHour() == radnoVreme.getKraj().getHour() && rezKraj.getMinute() > radnoVreme.getKraj().getMinute()){
            return "Restoran se zatvara u " + radnoVreme.getKraj().toString() + " morate zakazati termin barem 3 sata pre kraja radnog vremena";
        }
        System.out.println(r.getRestoran().getId() + " " + r.getBroj_mesta());
        List<Stol> stolovi = this.stolRepository.dohvatiStolove(r.getRestoran().getId(), r.getBroj_mesta());
        /*if(stolovi == null){
            return "Restoran nema stol za toliko ljudi";
        }*/
        if(stolovi == null || stolovi.size() == 0){
            return "Restoran nema stol za toliko ljudi";
        }
        for(int i = 0; i < stolovi.size(); i++){
            int temp2 = this.rezervacijaRepository.proveriRezervacijuZaStol(stolovi.get(i).getId(), r.getPocetak(), r.getKraj());
            if(temp2 == 0){
                // formiramo rezervaciju
                Rezervacija rez = this.rezervacijaMapper.dtoToEntity(r);
                rez.setStol(null);
                rez.setStatus("Z");
                this.rezervacijaRepository.save(rez);
                return "Zahtev za rezervacijom je uspesno kreiran";
            }
        }
        return "Ne postoji slobodan stol u ovom terminu za ovaj broj ljudi";
    }

    @GetMapping("/ukupnoRezervacija1")
    public int ukupnoRezervacija1() {
        LocalDateTime datum1 = LocalDateTime.now();
        LocalDateTime datum2 = datum1.minusDays(1);
        int ret = this.rezervacijaRepository.ukupnoRezervacija(datum2, datum1);
        return ret;
    }

    @GetMapping("/ukupnoRezervacija2")
    public int ukupnoRezervacija2() {
        LocalDateTime datum1 = LocalDateTime.now();
        LocalDateTime datum2 = datum1.minusDays(7);
        int ret = this.rezervacijaRepository.ukupnoRezervacija(datum2, datum1);
        return ret;
    }

    @GetMapping("/ukupnoRezervacija3")
    public int ukupnoRezervacija3() {
        LocalDateTime datum1 = LocalDateTime.now();
        LocalDateTime datum2 = datum1.minusMonths(1);
        int ret = this.rezervacijaRepository.ukupnoRezervacija(datum2, datum1);
        return ret;
    }

    @PostMapping("/dohvatiZahteveRezervacija")
    public List<RezervacijaDTO> dohvatiZahteveRezervacija(@RequestBody int idr) {
        List<Rezervacija> temp = this.rezervacijaRepository.dohvatiZahteveRezervacija(idr);
        List<RezervacijaDTO> ret = this.rezervacijaMapper.entitiesToDtos(temp);
        for(int i = 0; i<ret.size(); i++){
            // za svaki poseban zahtev za rezervaciju pravimo listu stolova
            List<Stol> stolovi = this.stolRepository.dohvatiStolove(ret.get(i).getRestoran().getId(), ret.get(i).getBroj_mesta());
            List<StolDTO> stoloviDTO = new ArrayList<>();
            for(int j = 0; j < stolovi.size(); j++){
                // za svaki poseban stol vidimo da li je zauzet u tom terminu
                int temp2 = this.rezervacijaRepository.proveriRezervacijuZaStol(stolovi.get(j).getId(), ret.get(i).getPocetak(), ret.get(i).getKraj());
                if(temp2 == 0){
                    StolDTO stolDto = stolMapper.entityToDto(stolovi.get(j));
                    stoloviDTO.add(stolDto);
                }
            }
            ret.get(i).setStolovi(stoloviDTO);
        }
        return ret;  
    }

    @PostMapping("/prihvatiRezervaciju")
    public void prihvatiRezervaciju(@RequestBody RezervacijaDTO r) {
        this.rezervacijaRepository.prihvatiRezervaciju(r.getId(), r.getKonobar(), r.getStol().getId());
    }

    @PostMapping("/odbijRezervaciju")
    public void odbijRezervaciju(@RequestBody RezervacijaDTO r) {
        this.rezervacijaRepository.odbijRezervaciju(r.getId(), r.getRazlog());
    }

    @PostMapping("/dohvatiRezervacijeKonobar")
    public List<RezervacijaDTO> dohvatiRezervacijeKonobar(@RequestBody int konobar) {
        LocalDate datum = LocalDate.now();
        LocalDateTime datum1 = datum.atStartOfDay();
        LocalDateTime datum2 = datum.plusDays(1).atStartOfDay();
        List<Rezervacija> temp = this.rezervacijaRepository.dohvatiRezervacijeKonobar(konobar, datum1, datum2);
        List<RezervacijaDTO> ret = this.rezervacijaMapper.entitiesToDtos(temp);
        return ret;
    }

    @PostMapping("/dosaoGost")
    public void dosaoGost(@RequestBody int idr) {
        this.rezervacijaRepository.dosaoGost(idr);
    }

    @PostMapping("/nijeDosaoGost")
    public void nijeDosaoGost(@RequestBody int idr) {

        this.rezervacijaRepository.nijeDosaoGost(idr);
    }

    @PostMapping("/dohvatiAktivneRezervacije")
    public List<RezervacijaDTO> dohvatiAktivneRezervacije(@RequestBody int idk) {
        LocalDateTime datum = LocalDateTime.now();
        List<Rezervacija> temp = this.rezervacijaRepository.dohvatiAktivneRezervacije(idk, datum);
       // List<Rezervacija> temp = this.rezervacijaRepository.findAll();
        List<RezervacijaDTO> ret = this.rezervacijaMapper.entitiesToDtos(temp);
        return ret;
    }
    
    @PostMapping("/dohvatiArhiviraneRezervacije")
    public List<RezervacijaDTO> dohvatiArhiviraneRezervacije(@RequestBody int idk) {
        List<Rezervacija> temp = this.rezervacijaRepository.dohvatiArhiviraneRezervacije(idk);
        //List<Rezervacija> temp = this.rezervacijaRepository.findAll();
        List<RezervacijaDTO> ret = this.rezervacijaMapper.entitiesToDtos(temp);
        return ret;
    }

    @PostMapping("/dohvatiStatistiku1")
    public Statistika1DTO dohvatiStatistiku1(@RequestBody int idk) {
        int pocetni_dan = 10;
        LocalDateTime datum1;
        LocalDateTime datum2;
        List<LocalDate> datumi = new ArrayList<>();
        List<Integer> vrednosti = new ArrayList<>();
        for(int i = pocetni_dan; i > 0; i--){
            datum1 = LocalDate.now().minusDays(i).atStartOfDay();
            datum2 = LocalDate.now().minusDays(i - 1).atStartOfDay();
            datumi.add(datum1.toLocalDate());
            vrednosti.add(this.rezervacijaRepository.statistika1(idk, datum1, datum2));
        }
        Statistika1DTO ret = new Statistika1DTO(datumi, vrednosti);
        return ret;
    }


    @PostMapping("/dohvatiStatistiku2")
    public Statistika2DTO dohvatiStatistiku2(@RequestBody int idr) {
        int pocetni_dan = 10;
        LocalDateTime datum1 = LocalDate.now().minusDays(pocetni_dan).atStartOfDay();
        LocalDateTime datum2 = LocalDate.now().atStartOfDay();
        List<Object[]> rezultati = this.rezervacijaRepository.statistika2(idr, datum1, datum2);
        List<String> imena = new ArrayList<>();
        List<Integer> vrednosti = new ArrayList<>();
        for (Object[] red :rezultati) {
            imena.add((String) red[0]);
            BigDecimal decimalnaVrednost = (BigDecimal) red[1];
            // Pretvaranje BigDecimal u Integer
            vrednosti.add(decimalnaVrednost.intValue());
        }
        Statistika2DTO ret = new Statistika2DTO(imena, vrednosti);
        return ret;
    }

    @PostMapping("/dohvatiStatistiku3")
    public Statistika3DTO dohvatiStatistiku3(@RequestBody int idk) {
        LocalDateTime datum = LocalDate.now().atStartOfDay();
        List<Object[]> rezultati = this.rezervacijaRepository.statistika3(idk, datum);
        List<String> dani = new ArrayList<>();
        List<Double> vrednosti = new ArrayList<>();
        for (Object[] red :rezultati) {
            dani.add((String) red[0]);
            BigDecimal decimalnaVrednost = (BigDecimal) red[1];
            // Pretvaranje BigDecimal u Integer
            vrednosti.add(decimalnaVrednost.doubleValue());
        }
        Statistika3DTO ret = new Statistika3DTO(dani, vrednosti);
        return ret;
    }
    
    
}
