package com.example.backend.modelsDTO;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class StolDTO {
    private int id;
    private int idr;
    private String naziv;
    private int broj_mesta;
    private String tip;
    private int k1;
    private int k2;
    private int k3;
    private int k4;


    public StolDTO() {}

    @JsonCreator
    public StolDTO(@JsonProperty("naziv") String naziv, @JsonProperty("broj_mesta") int broj_mesta) {
        this.naziv = naziv;
        this.broj_mesta = broj_mesta;
    }

    public StolDTO(int id, int idr, String naziv, int broj_mesta, String tip, int k1, int k2, int k3, int k4) {
        this.id = id;
        this.idr = idr;
        this.naziv = naziv;
        this.broj_mesta = broj_mesta;
        this.tip = tip;
        this.k1 = k1;
        this.k2 = k2;
        this.k3 = k3;
        this.k4 = k4;
    }

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
    public int getBroj_mesta() {
        return broj_mesta;
    }
    public void setBroj_mesta(int broj_mesta) {
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
