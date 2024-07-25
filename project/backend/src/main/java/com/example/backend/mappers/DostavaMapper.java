package com.example.backend.mappers;
import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.example.backend.models.Dostava;
import com.example.backend.modelsDTO.DostavaDTO;


@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface DostavaMapper {

    DostavaDTO entityToDto(Dostava d);

    Dostava dtoToEntity(DostavaDTO d);

    List<DostavaDTO> entitiesToDtos(List<Dostava> d);
    
}
