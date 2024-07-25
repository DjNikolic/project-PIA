package com.example.backend.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.models.Rezervacija;

import jakarta.transaction.Transactional;

public interface RezervacijaRepository extends JpaRepository<Rezervacija, Long> {

    @Query(value = "select count(*) from rezervacije where ids = :ids and (:pocetak between pocetak and kraj or :kraj between pocetak and kraj)", nativeQuery = true)
	int proveriRezervacijuZaStol(@Param("ids") Integer ids, @Param("pocetak") LocalDateTime pocetak, @Param("kraj") LocalDateTime kraj);
    
    @Query(value = "select count(*) from rezervacije where status = 'D' and pocetak between :datum1 and :datum2", nativeQuery = true)
	int ukupnoRezervacija(@Param("datum1") LocalDateTime datum1, @Param("datum2") LocalDateTime datum2);
    
    @Query(value = "select * from rezervacije where idr = :idr and status = 'Z' order by pocetak", nativeQuery = true)
	List<Rezervacija> dohvatiZahteveRezervacija(@Param("idr") Integer idr);

    @Modifying
    @Transactional
    @Query(value = "update rezervacije set status = 'P', konobar = :konobar, ids = :ids where id = :id", nativeQuery = true)
	int prihvatiRezervaciju(@Param("id") Integer id, @Param("konobar") Integer konobar, @Param("ids") Integer ids);

    @Modifying
    @Transactional
    @Query(value = "update rezervacije set status = 'O', razlog = :razlog where id = :id ", nativeQuery = true)
	int odbijRezervaciju(@Param("id") Integer id, @Param("razlog") String razlog);

    @Query(value = "select * from rezervacije where konobar = :konobar and status = 'P' and pocetak > :datum1 and pocetak < :datum2", nativeQuery = true)
	List<Rezervacija> dohvatiRezervacijeKonobar(@Param("konobar") Integer konobar,  @Param("datum1") LocalDateTime datum1,  @Param("datum2") LocalDateTime datum2);

    @Modifying
    @Transactional
    @Query(value = "update rezervacije set status = 'D' where id = :id ", nativeQuery = true)
	int dosaoGost(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "update rezervacije set status = 'N' where id = :id ", nativeQuery = true)
	int nijeDosaoGost(@Param("id") Integer id);

    @Query(value = "select * from rezervacije where idk = :idk and (status = 'Z' or status = 'P' or (status = 'O' and pocetak > :datum)) order by pocetak", nativeQuery = true)
	List<Rezervacija> dohvatiAktivneRezervacije(@Param("idk") Integer idk, @Param("datum") LocalDateTime datum);

    @Query(value = "select * from rezervacije where idk= :idk and (status = 'D' or status = 'N') order by pocetak desc", nativeQuery = true)
	List<Rezervacija> dohvatiArhiviraneRezervacije(@Param("idk") Integer idk);

    @Query(value = "SELECT SUM(broj_mesta) FROM rezervacije WHERE konobar = :konobar AND pocetak Between :datum1 and :datum2 AND status='D'", nativeQuery = true)
    Integer statistika1(@Param("konobar") int konobar, @Param("datum1") LocalDateTime datum1, @Param("datum2") LocalDateTime datum2);

    @Query(value = "SELECT CONCAT(k.ime, ' ', k.prezime) as podatak,  SUM(r.broj_mesta) as ukupno " +
                    "FROM rezervacije r join korisnici k on (r.konobar = k.id) " +
                    "WHERE r.idr = :idr AND r.status='D' AND r.pocetak Between :datum1 and :datum2 group by r.konobar", nativeQuery = true)
    List<Object[]> statistika2(@Param("idr") int idr, @Param("datum1") LocalDateTime datum1, @Param("datum2") LocalDateTime datum2);

    @Query(value = "SELECT DAYNAME(r.pocetak) AS dan_u_nedelji, " + 
                    "COUNT(*) / COUNT(DISTINCT DATE(r.pocetak)) AS broj_rezervacija " +
                    "FROM rezervacije r " +
                    "WHERE r.konobar = :konobar " +
                    "AND r.pocetak >= DATE_SUB(:datum, INTERVAL 24 MONTH) " +
                    "AND status='D' " +
                    "GROUP BY DAYNAME(r.pocetak) " +
                    "ORDER BY FIELD(dan_u_nedelji, 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota', 'Nedelja')", nativeQuery = true)
    List<Object[]> statistika3(@Param("konobar") int konobar, @Param("datum") LocalDateTime datum);

}
