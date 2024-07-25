package com.example.backend.modelsDTO;

public class KonobarRestoranDTO {
    private KorisnikDTO konobar;
    private RestoranDTO restoran;

    
    public KonobarRestoranDTO() {
    }


    public KorisnikDTO getKonobar() {
        return konobar;
    }


    public void setKonobar(KorisnikDTO konobar) {
        this.konobar = konobar;
    }


    public RestoranDTO getRestoran() {
        return restoran;
    }


    public void setRestoran(RestoranDTO restoran) {
        this.restoran = restoran;
    }

    
}
