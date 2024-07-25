package com.example.backend.modelsDTO;

import java.time.LocalDate;
import java.util.List;

public class Statistika1DTO {
    private List<LocalDate> datumi;
    private List<Integer> vrednosti;

    public Statistika1DTO(List<LocalDate> datumi, List<Integer> vrednosti) {
        this.datumi = datumi;
        this.vrednosti = vrednosti;
    }

    public List<LocalDate> getDatumi() {
        return datumi;
    }

    public void setDatumi(List<LocalDate> datumi) {
        this.datumi = datumi;
    }

    public List<Integer> getVrednosti() {
        return vrednosti;
    }

    public void setVrednosti(List<Integer> vrednosti) {
        this.vrednosti = vrednosti;
    }
}
