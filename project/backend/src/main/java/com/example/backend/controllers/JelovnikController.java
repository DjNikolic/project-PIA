package com.example.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.mappers.JelovnikMapper;
import com.example.backend.models.Jelovnik;
import com.example.backend.modelsDTO.JelovnikDTO;
import com.example.backend.repository.JelovnikRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/jelovnik")
@CrossOrigin( origins = "http://localhost:4200/")
public class JelovnikController {

    @Autowired
    private JelovnikRepository jelovnikRepository;

    @Autowired
    private JelovnikMapper jelovnikMappre;
    
    @PostMapping("/dohvatiJelovnik")
    public List<JelovnikDTO> podohvatiJelovnikstMethodName(@RequestBody int idr) {
        List<Jelovnik> ret = jelovnikRepository.dohvatiJelovnik(idr);
        List<JelovnikDTO> retDTO = jelovnikMappre.entitiesToDtos(ret);
        return retDTO;
    }
    
}
