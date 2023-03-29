package com.climateapp.backend.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "v1_annualglobal")
public class V1AnnualGlobal {

    @Id
    @Column(name = "year")
    public String year;

    @Column(name = "global_anomaly")
    public double global_anomaly;


    public V1AnnualGlobal() {
    }


    public V1AnnualGlobal(String year, double global_anomaly) {
        this.year = year;
        this.global_anomaly = global_anomaly;
    }

    
    
}
