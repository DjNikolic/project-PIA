package com.example.backend.models;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "korisnici")
public class Korisnik {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "korisnicko_ime")
    private String korisnicko_ime;

    @Column(name = "lozinka")
    private String lozinka;
    
    @Column(name = "bezbedonosno_pitanje")
    private String bezbedonosno_pitanje;
        
    @Column(name = "odgovor")
    private String odgovor;
        
    @Column(name = "ime")
    private String ime;
        
    @Column(name = "prezime")
    private String prezime;
        
    @Column(name = "tip")
    private String tip;
        
    @Column(name = "pol")
    private String pol;
        
    @Column(name = "adresa")
    private String adresa;
        
    @Column(name = "telefon")
    private String telefon;
        
    @Column(name = "mejl")
    private String mejl;

    @Column(name = "slika")
    private String slika;
        
    @Column(name = "kartica")
    private String kartica;
        
    @Column(name = "status")
    private String status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getKorisnicko_ime() {
        return korisnicko_ime;
    }

    public void setKorisnicko_ime(String korisnicko_ime) {
        this.korisnicko_ime = korisnicko_ime;
    }

    public String getLozinka() {
        return lozinka;
    }

    public void setLozinka(String lozinka) {
        this.lozinka = lozinka;
    }

    public String getBezbedonosno_pitanje() {
        return bezbedonosno_pitanje;
    }

    public void setBezbedonosno_pitanje(String bezbedonosno_pitanje) {
        this.bezbedonosno_pitanje = bezbedonosno_pitanje;
    }

    public String getOdgovor() {
        return odgovor;
    }

    public void setOdgovor(String odgovor) {
        this.odgovor = odgovor;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }

    public String getPol() {
        return pol;
    }

    public void setPol(String pol) {
        this.pol = pol;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getMejl() {
        return mejl;
    }

    public void setMejl(String mejl) {
        this.mejl = mejl;
    }

    public String getSlika() {
        return slika;
    }

    public void setSlika(String slika) {
        this.slika = slika;
    }

    public String getKartica() {
        return kartica;
    }

    public void setKartica(String kartica) {
        this.kartica = kartica;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }



}
