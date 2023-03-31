package com.climateapp.backend.data.database;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "v1_annualsouth")
public class V1AnnualSouth {

    @Id
    @Column(name = "year")
    public String year;

    @Column(name = "southern_anomaly")
    public double southern_anomaly;


    public V1AnnualSouth() {
    }


    public V1AnnualSouth(String year, double southern_anomaly) {
        this.year = year;
        this.southern_anomaly = southern_anomaly;
    }

    
    
}
