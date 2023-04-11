package com.climateapp.backend.data.database;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "v1_reconstruction")
public class V1Reconstruction {
    

    @Id
    @Column(name = "year")
    public int year;

    @Column(name = "t")
    public double t;

    public V1Reconstruction() {
    }

    public V1Reconstruction(int year, double t) {
        this.year = year;
        this.t = t;
    }
}