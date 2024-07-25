package com.example.backend.modelsDTO;

public class ZaposlenDTO {
    private int id;
    private int idr;
    private int idk;


    public ZaposlenDTO() {
    }


    public ZaposlenDTO(int id, int idr, int idk) {
        this.id = id;
        this.idr = idr;
        this.idk = idk;
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
    public int getIdk() {
        return idk;
    }
    public void setIdk(int idk) {
        this.idk = idk;
    }

    
}

