package com.example.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.example.backend.models.StavkaDostave;
import com.example.backend.modelsDTO.StavkaDostaveDTO;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface StavkaDostaveMapper {

    StavkaDostaveDTO entityToDto(StavkaDostave s);

    StavkaDostave dtoToEntity(StavkaDostaveDTO s);

    List<StavkaDostaveDTO> entitiesToDtos(List<StavkaDostave> s);
    
}
