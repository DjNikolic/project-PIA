package com.example.backend.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.example.backend.models.RadnoVreme;
import com.example.backend.modelsDTO.RadnoVremeDTO;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface RadnoVremeMapper {
    
    RadnoVremeDTO entityToDto(RadnoVreme k);

    RadnoVreme dtoToEntity(RadnoVremeDTO k);
}
