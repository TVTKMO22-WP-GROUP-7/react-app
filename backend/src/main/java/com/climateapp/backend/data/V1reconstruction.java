package com.climateapp.backend.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "v1_reconstruction")
public class V1reconstruction {
    

    @Id
    @Column(name = "year")
    public int year;

    @Column(name = "t")
    public double t;

    public V1reconstruction() {
    }

    public V1reconstruction(int year, double t) {
        this.year = year;
        this.t = t;
    }
}