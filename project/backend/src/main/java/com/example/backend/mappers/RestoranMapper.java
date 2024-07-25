package com.example.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.example.backend.models.Restoran;
import com.example.backend.modelsDTO.RestoranDTO;



@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface RestoranMapper {


    RestoranDTO entityToDto(Restoran r);

    Restoran dtoToEntity(RestoranDTO r);

    List<RestoranDTO> entitiesToDtos(List<Restoran> r);

    
}
