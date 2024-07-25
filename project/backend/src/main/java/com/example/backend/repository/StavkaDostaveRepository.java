package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.models.StavkaDostave;

public interface StavkaDostaveRepository extends JpaRepository<StavkaDostave, Long>  {

    @Query(value = "select * from stavke_dostave where  idd = :idd", nativeQuery = true)
	List<StavkaDostave> dohvatiStavke(@Param("idd") int idd);
   
}
