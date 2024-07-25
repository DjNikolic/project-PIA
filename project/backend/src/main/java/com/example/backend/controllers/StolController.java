package com.example.backend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.mappers.StolMapper;
import com.example.backend.models.Stol;
import com.example.backend.modelsDTO.RezervacijaDTO;
import com.example.backend.modelsDTO.StolDTO;
import com.example.backend.repository.RezervacijaRepository;
import com.example.backend.repository.StolRepository;

@RestController
@RequestMapping("/stol")
@CrossOrigin( origins = "http://localhost:4200/")
public class StolController {

    @Autowired
    private StolRepository stolRepository;

    @Autowired
    private RezervacijaRepository rezervacijaRepository;

    @Autowired
    private StolMapper stolMapper;

    @PostMapping("/dohvatiStolove")
    public List<StolDTO> dohvatiStolove(@RequestBody RezervacijaDTO r) {
        r.setPocetak(r.getPocetak().plusHours(2));
        r.setKraj(r.getKraj().plusHours(2));
        List<StolDTO> ret = new ArrayList<>();
        List<Stol> stolovi = this.stolRepository.dohvatiStolove(r.getRestoran().getId(), r.getBroj_mesta());
        for(int i = 0; i < stolovi.size(); i++){
            int temp2 = this.rezervacijaRepository.proveriRezervacijuZaStol(stolovi.get(i).getId(), r.getPocetak(), r.getKraj());
            if(temp2 == 0){
                StolDTO temp = stolMapper.entityToDto(stolovi.get(i));
                ret.add(temp);
            }
        }
        return ret;
    }

    @PostMapping("/dohvatiSveElemente")
    public List<StolDTO> dohvatiSveElemente(@RequestBody int idr) {
        List<StolDTO> ret = new ArrayList<>();
        List<Stol> temp = this.stolRepository.dohvatiSveElemente(idr);
        ret = this.stolMapper.entitiesToDtos(temp);
        return ret;
    }
    
}
