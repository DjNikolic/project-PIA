package com.example.backend.controllers;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.mappers.KorisnikMapper;
import com.example.backend.mappers.RestoranMapper;
import com.example.backend.mappers.StolMapper;
import com.example.backend.models.Korisnik;
import com.example.backend.models.RadnoVreme;
import com.example.backend.models.Restoran;
import com.example.backend.models.Stol;
import com.example.backend.modelsDTO.DvaDatumaDTO;
import com.example.backend.modelsDTO.KorisnikDTO;
import com.example.backend.modelsDTO.RestoranDTO;
import com.example.backend.modelsDTO.StolDTO;
import com.example.backend.repository.KorisnikRepository;
import com.example.backend.repository.RadnoVremeRepository;
import com.example.backend.repository.RestoranRepository;
import com.example.backend.repository.StolRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/restoran")
@CrossOrigin( origins = "http://localhost:4200/")
public class RestoranController {

    @Autowired
    private RestoranMapper restoranMapper;

    @Autowired
    private KorisnikMapper korisnikMapper;

    @Autowired
    private StolMapper stolMapper;

    @Autowired
    private RestoranRepository restoranRepository;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private StolRepository stolRepository;

    @Autowired
    private RadnoVremeRepository radnoVremeRepository;


    @GetMapping("/ukupnoRestorana")
    public int ukupnoRestorana(){
        return this.restoranRepository.ukupnoRestorana();
    }

    @GetMapping("/dohvatiRestorane")
    public List<RestoranDTO> dohvatiRestorane(){
        final List<Restoran> ret = this.restoranRepository.findAll();
		final List<RestoranDTO> retDTO = new ArrayList<>();
        for(int i = 0; i < ret.size(); i++){
            final List<Korisnik> temp = this.korisnikRepository.dohvatiZaposlene(ret.get(i).getId());
            final List<KorisnikDTO> tempDTO = this.korisnikMapper.entitiesToDtos(temp);
            final RestoranDTO temp2 = this.restoranMapper.entityToDto(ret.get(i));
            temp2.setKonobari(tempDTO);
            retDTO.add(temp2);
        }
        return retDTO;
    }


    @PostMapping("/dohvatiRestorane2")
    public List<RestoranDTO> dohvatiRestorane2(@RequestBody final RestoranDTO r){
        final List<Restoran> ret = this.restoranRepository.dohvatiRestorane("%" + r.getNaziv() + "%", "%" + r.getAdresa() + "%", "%" + r.getTip() + "%");
		final List<RestoranDTO> retDTO = new ArrayList<>();
        for(int i = 0; i < ret.size(); i++){
            final List<Korisnik> temp = this.korisnikRepository.dohvatiZaposlene(ret.get(i).getId());
            final List<KorisnikDTO> tempDTO = this.korisnikMapper.entitiesToDtos(temp);
            final RestoranDTO temp2 = this.restoranMapper.entityToDto(ret.get(i));
            temp2.setKonobari(tempDTO);
            retDTO.add(temp2);
        }
        return retDTO;
    }


    @PostMapping("/dodajRestoran")
    public void dodajRestoran(@RequestParam("stolovi") final MultipartFile stoloviFile, 
                                @RequestParam("naziv") final String naziv,
                                @RequestParam("adresa") final String adresa,
                                @RequestParam("tip") final String tip,
                                @RequestParam("opis") final String opis,
                                @RequestParam("telefon") final String telefon
    ) {
        Restoran r = new Restoran();
        r.setNaziv(naziv);
        r.setAdresa(adresa);
        r.setTip(tip);
        r.setOpis(opis);
        r.setTelefon(telefon);
        r = this.restoranRepository.save(r);

        ObjectMapper objectMapper = new ObjectMapper();
        List<StolDTO> stolovi;
        try {
            stolovi = objectMapper.readValue(stoloviFile.getInputStream(), new TypeReference<List<StolDTO>>() {});
            Stol s;
            for(int i = 0; i<stolovi.size(); i++){
                s = stolMapper.dtoToEntity(stolovi.get(i));
                s.setIdr(r.getId());
                this.stolRepository.save(s);
            }
        
        } catch (IOException e) {
            e.printStackTrace();
        }   
    }

    @PostMapping("/dohvatiRadnoVreme")
    public DvaDatumaDTO dohvatiRadnoVreme(@RequestParam("idr") final int idr, 
                                            @RequestParam("dan_u_nedelji") final int dan_u_nedelji){

        RadnoVreme radnoVreme = radnoVremeRepository.dohvatiRadnoVreme(idr, dan_u_nedelji);
        DvaDatumaDTO ret = new DvaDatumaDTO();
        LocalDate danas = LocalDate.now();
        LocalTime pocetak = LocalTime.MIDNIGHT;
        LocalTime kraj = LocalTime.MIDNIGHT;
        if(radnoVreme == null){
            ret.setPostoji(0);
        } else{
            pocetak = radnoVreme.getPocetak();
            kraj = radnoVreme.getKraj();
            ret.setPostoji(1);
        }  
        ret.setPocetak(pocetak.atDate(danas));
        ret.setKraj(kraj.atDate(danas));
        return ret;
    }

    @PostMapping("/azurirajRadnoVreme")
    public void azurirajRadnoVreme(@RequestParam("ps") final int ps, 
                                        @RequestParam("pm") final int pm,
                                        @RequestParam("ks") final int ks,
                                        @RequestParam("km") final int km,
                                        @RequestParam("postoji") final int postoji,
                                        @RequestParam("idr") final int idr,
                                        @RequestParam("dan_u_nedelji") final int dan_u_nedelji){
        LocalTime pocetak = LocalTime.of(ps, pm, 0);
        LocalTime kraj = LocalTime.of(ks, km, 0);
        if(postoji == 0){
            RadnoVreme radnoVreme = new RadnoVreme();
            radnoVreme.setIdr(idr);
            radnoVreme.setDan_u_nedelji(dan_u_nedelji);
            radnoVreme.setPocetak(pocetak);
            radnoVreme.setKraj(kraj);
            radnoVremeRepository.save(radnoVreme);
        } else{
            radnoVremeRepository.azurirajRadnoVreme(idr,dan_u_nedelji, pocetak, kraj);
        }
        return;
    }

}
