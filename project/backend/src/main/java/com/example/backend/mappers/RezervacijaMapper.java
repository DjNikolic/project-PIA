package com.example.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.example.backend.models.Rezervacija;
import com.example.backend.modelsDTO.RezervacijaDTO;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface RezervacijaMapper {

    RezervacijaDTO entityToDto(Rezervacija r);

    Rezervacija dtoToEntity(RezervacijaDTO r);

    List<RezervacijaDTO> entitiesToDtos(List<Rezervacija> r);
    
}
