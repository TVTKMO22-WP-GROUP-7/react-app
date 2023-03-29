package com.climateapp.backend.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "v1_monthlysouth")
public class V1MonthlySouth {

    @Id
    @Column(name = "year")
    public String year;

    @Column(name = "southern_anomaly")
    public double southern_anomaly;


    public V1MonthlySouth() {
    }


    public V1MonthlySouth(String year, double southern_anomaly) {
        this.year = year;
        this.southern_anomaly = southern_anomaly;
    }

    
    
}
