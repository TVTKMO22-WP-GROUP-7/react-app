package com.climateapp.backend.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "v1_annualnorth")
public class V1AnnualNorth {

    @Id
    @Column(name = "year")
    public String year;

    @Column(name = "northern_anomaly")
    public double northern_anomaly;

    public V1AnnualNorth() {
    }

    public V1AnnualNorth(String year, double northern_anomaly) {
        this.year = year;
        this.northern_anomaly = northern_anomaly;
    }

}
