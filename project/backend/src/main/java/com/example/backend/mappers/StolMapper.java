package com.example.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;


import com.example.backend.models.Stol;
import com.example.backend.modelsDTO.StolDTO;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface StolMapper {

    StolDTO entityToDto(Stol s);

    Stol dtoToEntity(StolDTO s);

    List<StolDTO> entitiesToDtos(List<Stol> s);
    
}
