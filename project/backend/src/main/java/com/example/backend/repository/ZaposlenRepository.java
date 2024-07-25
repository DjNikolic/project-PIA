package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.models.Zaposlen;

import jakarta.transaction.Transactional;

public interface ZaposlenRepository extends JpaRepository<Zaposlen, Long>{

    @Query(value = "select idr " +
                   "from zaposlen " +
                   "where idk = :idk", nativeQuery = true)
	int dohvatiMestoZaposlenja(@Param("idk") Integer idk);

    @Modifying
    @Transactional
    @Query(value = "update zaposlen set idr = :idr where idk = :idk", nativeQuery = true)
	void azurirajMestoZaposlenja(@Param("idr") Integer idr, @Param("idk") Integer idk);

    
}
