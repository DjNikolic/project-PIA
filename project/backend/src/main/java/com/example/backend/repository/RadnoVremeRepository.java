package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.models.RadnoVreme;

import java.time.LocalTime;

import jakarta.transaction.Transactional;

public interface RadnoVremeRepository extends JpaRepository<RadnoVreme, Long>{

    @Query(value = "select * from radno_vreme where idr = :idr and dan_u_nedelji = :dan_u_nedelji", nativeQuery = true)
	RadnoVreme dohvatiRadnoVreme(@Param("idr") Integer idr, @Param("dan_u_nedelji") Integer dan_u_nedelji);

    @Modifying
    @Transactional
    @Query(value = "update radno_vreme set pocetak = :pocetak, kraj = :kraj where idr = :idr and dan_u_nedelji = :dan_u_nedelji", nativeQuery = true)
	int azurirajRadnoVreme(@Param("idr") Integer idr, @Param("dan_u_nedelji") Integer dan_u_nedelji, @Param("pocetak") LocalTime pocetak,
                        @Param("kraj") LocalTime kraj);

    
}
