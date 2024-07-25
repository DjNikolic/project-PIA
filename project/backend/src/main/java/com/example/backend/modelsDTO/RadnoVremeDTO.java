package com.example.backend.modelsDTO;

import java.time.LocalTime;

public class RadnoVremeDTO {
    private int id;
    private int idr;
    private int dan_u_nedelji;
    private LocalTime pocetak; 
    private LocalTime kraj;


    public RadnoVremeDTO(int id, int idr, int dan_u_nedelji, LocalTime pocetak, LocalTime kraj) {
        this.id = id;
        this.idr = idr;
        this.dan_u_nedelji = dan_u_nedelji;
        this.pocetak = pocetak;
        this.kraj = kraj;
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
