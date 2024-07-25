package com.example.backend.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.example.backend.models.Zaposlen;
import com.example.backend.modelsDTO.ZaposlenDTO;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface ZaposlenMapper {
    
    ZaposlenDTO entityToDto(Zaposlen k);

    Zaposlen dtoToEntity(ZaposlenDTO k);
}
