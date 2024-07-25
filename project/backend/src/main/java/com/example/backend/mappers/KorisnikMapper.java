package com.example.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.example.backend.models.Korisnik;
import com.example.backend.modelsDTO.KorisnikDTO;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface KorisnikMapper {

    KorisnikDTO entityToDto(Korisnik k);

    Korisnik dtoToEntity(KorisnikDTO k);

    List<KorisnikDTO> entitiesToDtos(List<Korisnik> k);
 }
    
