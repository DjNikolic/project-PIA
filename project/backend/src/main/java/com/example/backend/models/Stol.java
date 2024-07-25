package com.example.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "stolovi")
public class Stol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "idr")
    private int idr;

    @Column(name = "naziv")
    private String naziv;

    @Column(name = "broj_mesta")
    private Integer broj_mesta;

    @Column(name = "tip")
    private String tip;

    @Column(name = "k1")
    private Integer k1;

    @Column(name = "k2")
    private Integer k2;

    @Column(name = "k3")
    private Integer k3;

    @Column(name = "k4")
    private Integer k4;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdr() {
        return idr;
    }

    public void setIdr(Integer idr) {
        this.idr = idr;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public Integer getBroj_mesta() {
        return broj_mesta;
    }

    public void setBroj_mesta(Integer broj_mesta) {
        this.broj_mesta = broj_mesta;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }

    public int getK1() {
        return k1;
    }

    public void setK1(int k1) {
        this.k1 = k1;
    }

    public int getK2() {
        return k2;
    }

    public void setK2(int k2) {
        this.k2 = k2;
    }

    public int getK3() {
        return k3;
    }

    public void setK3(int k3) {
        this.k3 = k3;
    }

    public int getK4() {
        return k4;
    }

    public void setK4(int k4) {
        this.k4 = k4;
    }

}
