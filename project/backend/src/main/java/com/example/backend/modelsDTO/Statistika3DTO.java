package com.example.backend.modelsDTO;

import java.util.List;

public class Statistika3DTO {
    List<String> dani;
    List<Double> vrednosti;


    public Statistika3DTO(List<String> dani, List<Double> vrednosti) {
        this.dani = dani;
        this.vrednosti = vrednosti;
    }

    
    public List<String> getDani() {
        return dani;
    }
    public void setDani(List<String> dani) {
        this.dani = dani;
    }
    public List<Double> getVrednosti() {
        return vrednosti;
    }
    public void setVrednosti(List<Double> vrednosti) {
        this.vrednosti = vrednosti;
    }

    
}
