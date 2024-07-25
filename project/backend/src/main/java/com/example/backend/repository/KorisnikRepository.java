package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.backend.models.Korisnik;

import jakarta.transaction.Transactional;

public interface KorisnikRepository extends JpaRepository<Korisnik, Long> {
    

    @Query(value = "select * from korisnici where korisnicko_ime = :korisnicko_ime and lozinka = SHA2(:lozinka, 256) and (tip = 'gost' or tip = 'konobar')", nativeQuery = true)
	Korisnik prijava(@Param("korisnicko_ime") String korisnicko_ime , @Param("lozinka") String lozinka);


    @Query(value = "select * from korisnici where korisnicko_ime = :korisnicko_ime and lozinka = SHA2(:lozinka, 256) and tip = 'admin'", nativeQuery = true)
	Korisnik prijavaAdmin(@Param("korisnicko_ime") String korisnicko_ime , @Param("lozinka") String lozinka);


    @Query(value = "select * from korisnici where korisnicko_ime = :korisnicko_ime", nativeQuery = true)
	Korisnik dohvatiKorisnika(@Param("korisnicko_ime") String korisnicko_ime);


    @Query(value = "select count(*) from korisnici where korisnicko_ime = :korisnicko_ime", nativeQuery = true)
	int postojiKorisnik(@Param("korisnicko_ime") String korisnicko_ime);


    @Query(value = "select count(*) from korisnici where mejl = :mejl", nativeQuery = true)
	int postojiMejl(@Param("mejl") String mejl);


    @Query(value = "select count(*) from korisnici where tip = 'gost' and status = 'O'", nativeQuery = true)
	int ukupnoGosta();


    @Query(value = "select * from korisnici where korisnicko_ime = :korisnicko_ime and lozinka = SHA2(:lozinka, 256)", nativeQuery = true)
	Korisnik dohvatiKorisnika(@Param("korisnicko_ime") String korisnicko_ime, @Param("lozinka") String lozinka);


    @Modifying
    @Transactional
    @Query(value = "update korisnici set lozinka = SHA2(:lozinka, 256) where korisnicko_ime = :korisnicko_ime", nativeQuery = true)
	int promeniLozinku(@Param("korisnicko_ime") String korisnicko_ime, @Param("lozinka") String lozinka);


    @Query(value = "select k.* from korisnici k left join zaposlen z  on (z.idk = k.id) where z.idr = :id", nativeQuery = true)
	List<Korisnik> dohvatiZaposlene(@Param("id") Integer id );


    @Query(value = "select * from korisnici where status = 'Z'", nativeQuery = true)
	List<Korisnik> dohvatiZahteve();

    @Modifying
    @Transactional
    @Query(value = "update korisnici set ime = :ime, prezime = :prezime, adresa = :adresa, mejl = :mejl, telefon = :telefon,"
                    + "kartica = :kartica, slika = :slika, status = :status where id = :id", nativeQuery = true)
	int azurirajKorisnika(@Param("id") Integer id, @Param("ime") String ime, @Param("prezime") String prezime,
                        @Param("adresa") String adresa, @Param("mejl") String mejl, @Param("telefon") String telefon,
                         @Param("kartica") String kartica, @Param("slika") String slika, @Param("status") String status);


    @Query(value = "select * from korisnici where tip = 'konobar'", nativeQuery = true)
    List<Korisnik> dohvatiKonobare();

    @Query(value = "select * from korisnici where tip = 'gost' and status != 'Z'", nativeQuery = true)
	List<Korisnik> dohvatiGoste();

    @Modifying
    @Transactional
    @Query(value = "update korisnici set status = :status where id = :id", nativeQuery = true)
	int promeniStatus(@Param("id") Integer id, @Param("status") String status);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO korisnici (korisnicko_ime, lozinka, bezbedonosno_pitanje, odgovor, ime, prezime, tip, pol, adresa, telefon, mejl, slika, kartica, status) " +
                   "VALUES (:korisnickoIme, SHA2(:lozinka, 256), :bezbedonosnoPitanje, :odgovor, :ime, :prezime, :tip, :pol, :adresa, :telefon, :mejl, :slika, :kartica, :status)", nativeQuery = true)
    void sacuvajKorisnika(@Param("korisnickoIme") String korisnickoIme,
                                   @Param("lozinka") String lozinka,
                                   @Param("bezbedonosnoPitanje") String bezbedonosnoPitanje,
                                   @Param("odgovor") String odgovor,
                                   @Param("ime") String ime,
                                   @Param("prezime") String prezime,
                                   @Param("tip") String tip,
                                   @Param("pol") String pol,
                                   @Param("adresa") String adresa,
                                   @Param("telefon") String telefon,
                                   @Param("mejl") String mejl,
                                   @Param("slika") String slika,
                                   @Param("kartica") String kartica,
                                   @Param("status") String status);
}

