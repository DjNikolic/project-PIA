package com.example.backend.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "rezervacije")
public class Rezervacija {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idr")
    private Restoran restoran;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ids")
    private Stol stol;

    @Column(name = "idk")
    private int idk;

    @Column(name = "pocetak")
    private LocalDateTime pocetak;

    @Column(name = "kraj")
    private LocalDateTime kraj;

    @Column(name = "broj_mesta")
    private int broj_mesta;

    @Column(name = "opis")
    private String opis;

    @Column(name = "status")
    private String status;

    @Column(name = "konobar")
    private int konobar;

    @Column(name = "razlog")
    private String razlog;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
    public Restoran getRestoran() {
        return restoran;
    }

    public void setRestoran(Restoran restoran) {
        this.restoran = restoran;
    }

    public Stol getStol() {
        return stol;
    }

    public void setStol(Stol stol) {
        this.stol = stol;
    }
   
    public int getIdk() {
        return idk;
    }

    public void setIdk(int idk) {
        this.idk = idk;
    }

    public LocalDateTime getPocetak() {
        return pocetak;
    }

    public void setPocetak(LocalDateTime pocetak) {
        this.pocetak = pocetak;
    }

    public LocalDateTime getKraj() {
        return kraj;
    }

    public void setKraj(LocalDateTime kraj) {
        this.kraj = kraj;
    }

    public int getBroj_mesta() {
        return broj_mesta;
    }

    public void setBroj_mesta(int broj_mesta) {
        this.broj_mesta = broj_mesta;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getKonobar() {
        return konobar;
    }

    public void setKonobar(int konobar) {
        this.konobar = konobar;
    }

    public String getRazlog() {
        return razlog;
    }

    public void setRazlog(String razlog) {
        this.razlog = razlog;
    }

}
