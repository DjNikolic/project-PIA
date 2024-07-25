package com.example.backend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.mappers.KorisnikMapper;
import com.example.backend.mappers.RestoranMapper;
import com.example.backend.models.Korisnik;
import com.example.backend.models.Restoran;
import com.example.backend.models.Zaposlen;
import com.example.backend.modelsDTO.KonobarRestoranDTO;
import com.example.backend.modelsDTO.KorisnikDTO;
import com.example.backend.repository.KorisnikRepository;
import com.example.backend.repository.RestoranRepository;
import com.example.backend.repository.ZaposlenRepository;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/korisnik")
@CrossOrigin( origins = "http://localhost:4200/")
public class KorisnikController {

    @Autowired
    private KorisnikMapper korisnikMapper;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private ZaposlenRepository zaposlenRepository;

    @Autowired
    private RestoranRepository restoranRepository;

    @Autowired
    private RestoranMapper restoranMapper;



    @PostMapping("/prijava")
    public KorisnikDTO prijava(@RequestBody KorisnikDTO k){
        Korisnik ret = this.korisnikRepository.prijava(k.getKorisnicko_ime(), k.getLozinka());
        KorisnikDTO retDTO = this.korisnikMapper.entityToDto(ret);
        return retDTO;
    }

    @PostMapping("/prijavaAdmin")
    public KorisnikDTO prijavaAdmin(@RequestBody KorisnikDTO k){
        Korisnik ret = this.korisnikRepository.prijavaAdmin(k.getKorisnicko_ime(), k.getLozinka());
        KorisnikDTO retDTO = this.korisnikMapper.entityToDto(ret);
        return retDTO;
    }
    
    @Transactional
    @PostMapping("/registracija")
    public String registracija(@RequestBody KorisnikDTO k){
        int ret = this.korisnikRepository.postojiKorisnik(k.getKorisnicko_ime());

        if(ret > 0)
            return "Korisnicko ime je vec upotrebljeno";
        ret = this.korisnikRepository.postojiMejl(k.getMejl());
        if(ret > 0)
            return "Mejl adresa je vec upotrebljena";
        
        k.setStatus("Z");
        k.setTip("gost");
        //Korisnik kor = this.korisnikMapper.dtoToEntity(k);
        // try {
        //     kor.setSlika_podaci(k.getSlika().getBytes());
        // } catch (IOException e) {
        //     e.printStackTrace();
        // }
        // kor.setSlika_tip(k.getSlika().getOriginalFilename());
        // ovo moram da promenim
        this.korisnikRepository.sacuvajKorisnika(k.getKorisnicko_ime(),
                                                    k.getLozinka(),
                                                    k.getBezbedonosno_pitanje(),
                                                    k.getOdgovor(),
                                                    k.getIme(),
                                                    k.getPrezime(),
                                                    k.getTip(), 
                                                    k.getPol(), 
                                                    k.getAdresa(), 
                                                    k.getTelefon(), 
                                                    k.getMejl(), 
                                                    k.getSlika(), 
                                                    k.getKartica(), 
                                                    k.getStatus());
        //this.korisnikRepository.save(kor);
        return "Zahtev za registraciju je poslat";
    
    }

    @PostMapping("/dohvatiKorisnika")
    public KorisnikDTO dohvatiKorisnika(@RequestBody String s){
        Korisnik ret = this.korisnikRepository.dohvatiKorisnika(s);
        KorisnikDTO retDTO = this.korisnikMapper.entityToDto(ret);
        return retDTO;
    }

    @GetMapping("/ukupnoGosta")
    public int ukupnoGosta(){
        return this.korisnikRepository.ukupnoGosta();
    }

    @PostMapping("/promeniLozinku")
    public int promeniLozinku(@RequestBody KorisnikDTO k){
        return this.korisnikRepository.promeniLozinku(k.getKorisnicko_ime(), k.getLozinka());
    }

    @GetMapping("/dohvatiKorisnike")
    public List<KorisnikDTO> dohvatiKorisnike(){
        List<Korisnik> temp = this.korisnikRepository.findAll();
        List<KorisnikDTO> ret = this.korisnikMapper.entitiesToDtos(temp);
        return ret;
    }

    @GetMapping("/dohvatiZahteve")
    public List<KorisnikDTO> dohvatiZahteve(){
        List<Korisnik> temp = this.korisnikRepository.dohvatiZahteve();
        List<KorisnikDTO> ret = this.korisnikMapper.entitiesToDtos(temp);
        return ret;
    }

    
    @PostMapping("/azurirajKorisnika")
    public int azurirajKorisnika(@RequestBody KorisnikDTO k){
        return this.korisnikRepository.azurirajKorisnika(k.getId(), k.getIme(), k.getPrezime(), k.getAdresa(),
                                                        k.getMejl(), k.getTelefon(), k.getKartica(), k.getSlika(), k.getStatus());
    }

    @PostMapping("/dohvatiMestoZaposlenja")
    public int dohvatiMestoZaposlenja(@RequestBody KorisnikDTO k){
        return this.zaposlenRepository.dohvatiMestoZaposlenja(k.getId());
    }

    @GetMapping("/dohvatiKonobare")
    public List<KonobarRestoranDTO> dohvatiKonobare(){
        List<Korisnik> temp = this.korisnikRepository.dohvatiKonobare();
        List<KorisnikDTO> temp2 = this.korisnikMapper.entitiesToDtos(temp);
        List<KonobarRestoranDTO> ret = new ArrayList<>();
        for(int i = 0; i < temp2.size(); i++){
            KonobarRestoranDTO temp3 = new KonobarRestoranDTO();
            temp3.setKonobar(temp2.get(i));
            Restoran r = this.restoranRepository.dohvatiRestoran(temp2.get(i).getId());
            temp3.setRestoran(this.restoranMapper.entityToDto(r));
            ret.add(temp3);
        }
        return ret;
    }

    @GetMapping("/dohvatiGoste")
    public List<KorisnikDTO> dohvatiGoste(){
        List<Korisnik> temp = this.korisnikRepository.dohvatiGoste();
        List<KorisnikDTO> ret = this.korisnikMapper.entitiesToDtos(temp);
        return ret;
    }

    @Transactional
    @PostMapping("/registracijaKonobar")
    public String registracijaKonobar(@RequestBody KonobarRestoranDTO k){

        int ret = this.korisnikRepository.postojiKorisnik(k.getKonobar().getKorisnicko_ime());
        if(ret > 0)
            return "Korisnicko ime je vec upotrebljeno";
        ret = this.korisnikRepository.postojiMejl(k.getKonobar().getMejl());
        if(ret > 0)
            return "Mejl adresa je vec upotrebljena";
        k.getKonobar().setStatus("O");
        k.getKonobar().setTip("konobar");
        //Korisnik kor = this.korisnikMapper.dtoToEntity(k.getKonobar());
        // ovo moram da promenim
        this.korisnikRepository.sacuvajKorisnika(k.getKonobar().getKorisnicko_ime(),
                                                    k.getKonobar().getLozinka(),
                                                    k.getKonobar().getBezbedonosno_pitanje(),
                                                    k.getKonobar().getOdgovor(),
                                                    k.getKonobar().getIme(),
                                                    k.getKonobar().getPrezime(),
                                                    k.getKonobar().getTip(), 
                                                    k.getKonobar().getPol(), 
                                                    k.getKonobar().getAdresa(), 
                                                    k.getKonobar().getTelefon(), 
                                                    k.getKonobar().getMejl(), 
                                                    k.getKonobar().getSlika(), 
                                                    null, 
                                                    k.getKonobar().getStatus());
        Korisnik kor = this.korisnikRepository.dohvatiKorisnika(k.getKonobar().getKorisnicko_ime());
        //kor = this.korisnikRepository.save(kor);
        Zaposlen z = new Zaposlen();
        z.setIdk(kor.getId());
        z.setIdr(k.getRestoran().getId());
        this.zaposlenRepository.save(z);
        return "Konobar je uspesno kreiran";
    }

    @PostMapping("/odobriZahtev")
    public void odobriZahtev(@RequestBody int idk){
        this.korisnikRepository.promeniStatus(idk, "O");
    }

    @PostMapping("/odbijZahtev")
    public void odbijZahtev(@RequestBody int idk){
        this.korisnikRepository.promeniStatus(idk, "D");
    }

    @PostMapping("/azurirajMestoZaposlenja")
    public void azurirajMestoZaposlenja(@RequestBody KonobarRestoranDTO k){
        this.zaposlenRepository.azurirajMestoZaposlenja(k.getRestoran().getId(), k.getKonobar().getId());
    }


}
