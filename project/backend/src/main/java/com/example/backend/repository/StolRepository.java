package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.models.Stol;

public interface StolRepository extends JpaRepository<Stol, Long>{
    
    @Query(value = "select * from stolovi where idr = :idr and tip = 'stol' and broj_mesta >= :broj_mesta order by broj_mesta", nativeQuery = true)
	List<Stol> dohvatiStolove(@Param("idr") Integer idr, @Param("broj_mesta") Integer broj_mesta);

    @Query(value = "select * from stolovi where idr = :idr", nativeQuery = true)
	List<Stol> dohvatiSveElemente(@Param("idr") Integer idr);
    
}
