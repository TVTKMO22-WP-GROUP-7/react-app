package com.climateapp.backend.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "v1_annual")
public class v1annual {

    @Id
    @Column(name = "year")
    public int year;

    @Column(name = "global_anomaly")
    public double global_anomaly;

    @Column(name = "northern_anomaly")
    public double northern_anomaly;

    @Column(name = "southern_anomaly")
    public double southern_anomaly;


    public v1annual() {
    }

    public v1annual(int year, double global_anomaly, double northern_anomaly, double southern_anomaly) {
        this.year = year;
        this.global_anomaly = global_anomaly;
        this.northern_anomaly = northern_anomaly;
        this.southern_anomaly = southern_anomaly;
    }
    
}
