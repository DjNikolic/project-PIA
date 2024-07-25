package com.example.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "stavke_dostave")
public class StavkaDostave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "idd")
    private int idd;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idj")
    private Jelovnik jelovnik;

    @Column(name = "kolicina")
    private int kolicina;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getIdd() {
        return idd;
    }

    public void setIdd(int idd) {
        this.idd = idd;
    }

    public Jelovnik getJelovnik() {
        return jelovnik;
    }

    public void setJelovnik(Jelovnik jelovnik) {
        this.jelovnik = jelovnik;
    }

    public int getKolicina() {
        return kolicina;
    }

    public void setKolicina(int kolicina) {
        this.kolicina = kolicina;
    }


}
