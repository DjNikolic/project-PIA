package com.example.backend.modelsDTO;

import java.time.LocalDateTime;

public class DvaDatumaDTO {
    private LocalDateTime pocetak;
    private LocalDateTime kraj;
    private int postoji;

    public LocalDateTime getPocetak() {
        return pocetak;
    }
    public void setPocetak(LocalDateTime pocetak) {
        this.pocetak = pocetak;
    }
    public LocalDateTime getKraj() {
        return kraj;
    }
    public void setKraj(LocalDateTime kraj) {
        this.kraj = kraj;
    }
    public int getPostoji() {
        return postoji;
    }
    public void setPostoji(int postoji) {
        this.postoji = postoji;
    }

    
}
