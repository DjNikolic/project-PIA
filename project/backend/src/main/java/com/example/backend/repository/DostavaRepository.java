package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Modifying;

import com.example.backend.models.Dostava;

import jakarta.transaction.Transactional;

public interface DostavaRepository extends JpaRepository<Dostava, Long> {

    @Query(value ="select * from dostave where idr = :idr and status = :status", nativeQuery = true)
	List<Dostava> dohvatiDostave(@Param("idr") int idr, @Param("status") String status);

    @Transactional
    @Modifying
    @Query(value ="update dostave set status = :status, vreme_dostave = :vreme_dostave where id = :id", nativeQuery = true)
	void potvrdiDostavu(@Param("status") String status, @Param("vreme_dostave") String vreme_dostave, @Param("id") int id);
   
    @Transactional
    @Modifying
    @Query(value ="update dostave set status = :status where id = :id", nativeQuery = true)
	void odbijDostavu(@Param("status") String status, @Param("id") int id);

    @Query(value ="select * from dostave where idk = :idk and status = :status order by  datum desc", nativeQuery = true)
	List<Dostava> dohvatiDostave2(@Param("idk") int idk, @Param("status") String status);
   
}
