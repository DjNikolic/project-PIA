package com.example.backend.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.example.backend.models.Jelovnik;
import com.example.backend.modelsDTO.JelovnikDTO;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface JelovnikMapper {

    JelovnikDTO entityToDto(Jelovnik j);

    Jelovnik dtoToEntity(JelovnikDTO j);

    List<JelovnikDTO> entitiesToDtos(List<Jelovnik> j);
    
}
