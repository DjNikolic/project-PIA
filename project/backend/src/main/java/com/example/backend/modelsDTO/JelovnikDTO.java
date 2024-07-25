package com.example.backend.modelsDTO;

public class JelovnikDTO {
    private int id;
    private int idr;
    private String naziv;
    private int cena;
    private String slika;
    private String sastojci;


    public JelovnikDTO(int id, int idr, String naziv, int cena, String slika, String sastojci) {
        this.id = id;
        this.idr = idr;
        this.naziv = naziv;
        this.cena = cena;
        this.slika = slika;
        this.sastojci = sastojci;
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
    public int getCena() {
        return cena;
    }
    public void setCena(int cena) {
        this.cena = cena;
    }
    public String getSlika() {
        return slika;
    }
    public void setSlika(String slika) {
        this.slika = slika;
    }
    public String getSastojci() {
        return sastojci;
    }
    public void setSastojci(String sastojci) {
        this.sastojci = sastojci;
    }

    
    
}
