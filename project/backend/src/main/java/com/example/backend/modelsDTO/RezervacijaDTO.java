package com.example.backend.modelsDTO;

import java.time.LocalDateTime;
import java.util.List;

public class RezervacijaDTO {
    private int id;
    private RestoranDTO restoran;
    private StolDTO stol;
    private int idk;
    private LocalDateTime pocetak;
    private LocalDateTime kraj;
    private int broj_mesta;
    private String opis;
    private String status;
    private int konobar;
    private String razlog;
    private List<StolDTO> stolovi;


    // public RezervacijaDTO(int id, , int ids, int idk, LocalDateTime pocetak, LocalDateTime kraj, int broj_mesta,
    //         String opis, String status) {
    //     this.id = id;
    //     this.idr = idr;
    //     this.ids = ids;
    //     this.idk = idk;
    //     this.pocetak = pocetak;
    //     this.kraj = kraj;
    //     this.broj_mesta = broj_mesta;
    //     this.opis = opis;
    //     this.status = status;
    // }

    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public RestoranDTO getRestoran() {
        return restoran;
    }
    public void setRestoran(RestoranDTO restoran) {
        this.restoran = restoran;
    }
    public StolDTO getStol() {
        return stol;
    }
    public void setStol(StolDTO stol) {
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
    public List<StolDTO> getStolovi() {
        return stolovi;
    }
    public void setStolovi(List<StolDTO> stolovi) {
        this.stolovi = stolovi;
    }
    

}
