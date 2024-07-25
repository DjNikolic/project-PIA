package com.example.backend.models;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "radno_vreme")
public class RadnoVreme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "idr")
    private int idr;

    @Column(name = "dan_u_nedelji")
    private int dan_u_nedelji;

    @Column(name = "pocetak")
    private LocalTime pocetak; 

    @Column(name = "kraj")
    private LocalTime kraj;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getIdr() {
        return idr;
    }

    public void setIdr(int idr) {
        this.idr = idr;
    }

    public int getDan_u_nedelji() {
        return dan_u_nedelji;
    }

    public void setDan_u_nedelji(int dan_u_nedelji) {
        this.dan_u_nedelji = dan_u_nedelji;
    }

    public LocalTime getPocetak() {
        return pocetak;
    }

    public void setPocetak(LocalTime pocetak) {
        this.pocetak = pocetak;
    }

    public LocalTime getKraj() {
        return kraj;
    }

    public void setKraj(LocalTime kraj) {
        this.kraj = kraj;
    }
    
    
}
