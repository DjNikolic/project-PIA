package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.models.Jelovnik;

public interface JelovnikRepository extends JpaRepository<Jelovnik, Long>   {

    @Query(value = "select * from jelovnik where idr = :idr", nativeQuery = true)
	List<Jelovnik> dohvatiJelovnik(@Param("idr") Integer idr);
    
}
