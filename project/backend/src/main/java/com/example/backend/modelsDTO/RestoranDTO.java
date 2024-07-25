package com.example.backend.modelsDTO;

import java.util.List;

public class RestoranDTO {
    private int id;
    private String naziv;
    private String adresa;
    private String tip;
    private String opis;
    private String telefon;
    private List<KorisnikDTO> konobari;

    
    public RestoranDTO() {
    }


    public RestoranDTO(int id, String naziv, String adresa, String tip, String opis, String telefon, List<KorisnikDTO> konobari) {
        this.id = id;
        this.naziv = naziv;
        this.adresa = adresa;
        this.tip = tip;
        this.telefon = telefon;
        this.opis = opis;
        this.konobari = konobari;
    }

    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNaziv() {
        return naziv;
    }
    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }
    public String getAdresa() {
        return adresa;
    }
    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }
    public List<KorisnikDTO> getKonobari() {
        return konobari;
    }
    public void setKonobari(List<KorisnikDTO> konobari) {
        this.konobari = konobari;
    }
    public String getTelefon() {
        return telefon;
    }
    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }
    public String getOpis() {
        return opis;
    }
    public void setOpis(String opis) {
        this.opis = opis;
    }

    
    
}
