package com.example.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.mappers.DostavaMapper;
import com.example.backend.mappers.StavkaDostaveMapper;
import com.example.backend.models.Dostava;
import com.example.backend.models.StavkaDostave;
import com.example.backend.modelsDTO.DostavaDTO;
import com.example.backend.modelsDTO.StavkaDostaveDTO;
import com.example.backend.repository.DostavaRepository;
import com.example.backend.repository.StavkaDostaveRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/dostava")
@CrossOrigin( origins = "http://localhost:4200/")
public class DostavaController {

    @Autowired
    DostavaRepository dostavaRepository;

    @Autowired
    StavkaDostaveRepository stavkaDostaveRepository;

    @Autowired
    DostavaMapper dostavaMapper;

    @Autowired
    StavkaDostaveMapper stavkaDostaveMapper;

    @PostMapping("/kreirajDostavu")
    public void kreirajDostavu(@RequestBody DostavaDTO d) {
        // sacuvali smo dostavu
        d.setDatum(d.getDatum().plusHours(2));
        Dostava temp = dostavaMapper.dtoToEntity(d);
        Dostava novaDostava = this.dostavaRepository.save(temp);
        for(int i = 0; i< d.getStavke().size(); i++){
            // kreiramo svaku stavku posebno
            StavkaDostave temp2 = this.stavkaDostaveMapper.dtoToEntity(d.getStavke().get(i));
            temp2.setIdd(novaDostava.getId());
            this.stavkaDostaveRepository.save(temp2);
        }
    }

    @PostMapping("/dohvatiNoveDostave")
    public List<DostavaDTO> dohvatiNoveDostave(@RequestBody int idr){
        List<Dostava> temp = this.dostavaRepository.dohvatiDostave(idr, "Z");
        List<DostavaDTO> ret = this.dostavaMapper.entitiesToDtos(temp);
        for(int i = 0; i < ret.size(); i++){
            List<StavkaDostave> temp2 = this.stavkaDostaveRepository.dohvatiStavke(ret.get(i).getId());
            List<StavkaDostaveDTO> temp3 = this.stavkaDostaveMapper.entitiesToDtos(temp2);
            ret.get(i).setStavke(temp3);
        }
        return ret;
    }

    @PostMapping("/dohvatiPripremaneDostave")
    public List<DostavaDTO> dohvatiPripremaneDostave(@RequestBody int idr){
        List<Dostava> temp = this.dostavaRepository.dohvatiDostave(idr, "P");
        List<DostavaDTO> ret = this.dostavaMapper.entitiesToDtos(temp);
        for(int i = 0; i < ret.size(); i++){
            List<StavkaDostave> temp2 = this.stavkaDostaveRepository.dohvatiStavke(ret.get(i).getId());
            List<StavkaDostaveDTO> temp3 = this.stavkaDostaveMapper.entitiesToDtos(temp2);
            ret.get(i).setStavke(temp3);
        }
        return ret;
    }

    @PostMapping("/potvrdiDostavu")
    public void potvrdiDostavu(@RequestBody DostavaDTO d){
        this.dostavaRepository.potvrdiDostavu("P", d.getVreme_dostave(), d.getId());
    }

    @PostMapping("/odbijDostavu")
    public void odbijDostavu(@RequestBody DostavaDTO d){
        this.dostavaRepository.odbijDostavu("O", d.getId());
    }

    @PostMapping("/gotovaDostava")
    public void gotovaDostava(@RequestBody DostavaDTO d){
        this.dostavaRepository.odbijDostavu("G", d.getId());
    }

    @PostMapping("/dohvatiPripremaneDostave2")
    public List<DostavaDTO> dohvatiPripremaneDostave2(@RequestBody int idk){
        List<Dostava> temp = this.dostavaRepository.dohvatiDostave2(idk, "P");
        List<DostavaDTO> ret = this.dostavaMapper.entitiesToDtos(temp);
        for(int i = 0; i < ret.size(); i++){
            List<StavkaDostave> temp2 = this.stavkaDostaveRepository.dohvatiStavke(ret.get(i).getId());
            List<StavkaDostaveDTO> temp3 = this.stavkaDostaveMapper.entitiesToDtos(temp2);
            ret.get(i).setStavke(temp3);
        }
        return ret;
    }

    @PostMapping("/dohvatiGotoveDostave")
    public List<DostavaDTO> dohvatiGotoveDostave(@RequestBody int idk){
        List<Dostava> temp = this.dostavaRepository.dohvatiDostave2(idk, "G");
        List<DostavaDTO> ret = this.dostavaMapper.entitiesToDtos(temp);
        for(int i = 0; i < ret.size(); i++){
            List<StavkaDostave> temp2 = this.stavkaDostaveRepository.dohvatiStavke(ret.get(i).getId());
            List<StavkaDostaveDTO> temp3 = this.stavkaDostaveMapper.entitiesToDtos(temp2);
            ret.get(i).setStavke(temp3);
        }
        return ret;
    }
    
}
