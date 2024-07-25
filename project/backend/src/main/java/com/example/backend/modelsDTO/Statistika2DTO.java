package com.example.backend.modelsDTO;

import java.util.List;

public class Statistika2DTO {
    List<String> imena;
    List<Integer> vrednosti;


    public Statistika2DTO(List<String> imena, List<Integer> vrednosti) {
        this.imena = imena;
        this.vrednosti = vrednosti;
    }

    
    public List<String> getImena() {
        return imena;
    }
    public void setImena(List<String> imena) {
        this.imena = imena;
    }
    public List<Integer> getVrednosti() {
        return vrednosti;
    }
    public void setVrednosti(List<Integer> vrednosti) {
        this.vrednosti = vrednosti;
    }

    
}
