package com.example.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "jelovnik")
public class Jelovnik {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "idr")
    private int idr;

    @Column(name = "naziv")
    private String naziv;

    @Column(name = "cena")
    private int cena;

    @Column(name = "slika")
    private String slika;

    @Column(name = "sastojci")
    private String sastojci;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdr() {
        return idr;
    }

    public void setIdr(int idr) {
        this.idr = idr;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public int getCena() {
        return cena;
    }

    public void setCena(int cena) {
        this.cena = cena;
    }

    public String getSastojci() {
        return sastojci;
    }

    public void setSastojci(String sastojci) {
        this.sastojci = sastojci;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSlika() {
        return slika;
    }

    public void setSlika(String slika) {
        this.slika = slika;
    }

    
    
}
