package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.models.Restoran;

public interface RestoranRepository extends JpaRepository<Restoran, Long> {
    
    @Query(value = "select count(*) from restorani", nativeQuery = true)
	int ukupnoRestorana();


    @Query(value = "select * from restorani where naziv like :naziv and adresa like :adresa and tip like :tip", nativeQuery = true)
	List<Restoran> dohvatiRestorane(@Param("naziv") String naziv , @Param("adresa") String adresa, @Param("tip") String tip);
    
    @Query(value = "select r.* from zaposlen z join restorani r on (z.idr = r.id) where z.idk = :idk", nativeQuery = true)
	Restoran dohvatiRestoran(@Param("idk") Integer idk);
    


}
