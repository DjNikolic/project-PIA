package com.example.backend.modelsDTO;

public class StavkaDostaveDTO {
    private int id;
    private int idd;
    private JelovnikDTO jelovnik;
    private int kolicina;

    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getIdd() {
        return idd;
    }
    public void setIdd(int idd) {
        this.idd = idd;
    }
    public JelovnikDTO getJelovnik() {
        return jelovnik;
    }
    public void setJelovnik(JelovnikDTO jelovnik) {
        this.jelovnik = jelovnik;
    }
    public int getKolicina() {
        return kolicina;
    }
    public void setKolicina(int kolicina) {
        this.kolicina = kolicina;
    }

    
}
