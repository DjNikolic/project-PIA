package com.example.backend.modelsDTO;

import java.time.LocalDateTime;
import java.util.List;

public class DostavaDTO {
    private int id;
    private int idk;
    private RestoranDTO restoran;
    private LocalDateTime datum;
    private int iznos;
    private String vreme_dostave;
    private String status;
    private List<StavkaDostaveDTO> stavke;

    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getIdk() {
        return idk;
    }
    public void setIdk(int idk) {
        this.idk = idk;
    }
    public RestoranDTO getRestoran() {
        return restoran;
    }
    public void setRestoran(RestoranDTO restoran) {
        this.restoran = restoran;
    }
    public LocalDateTime getDatum() {
        return datum;
    }
    public void setDatum(LocalDateTime datum) {
        this.datum = datum;
    }
    public int getIznos() {
        return iznos;
    }
    public void setIznos(int iznos) {
        this.iznos = iznos;
    }
    public String getVreme_dostave() {
        return vreme_dostave;
    }
    public void setVreme_dostave(String vreme_dostave) {
        this.vreme_dostave = vreme_dostave;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public List<StavkaDostaveDTO> getStavke() {
        return stavke;
    }
    public void setStavke(List<StavkaDostaveDTO> stavke) {
        this.stavke = stavke;
    }

    

}
