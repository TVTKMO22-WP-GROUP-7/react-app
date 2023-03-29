package com.climateapp.backend.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "v1_monthlyglobal")
public class V1MonthlyGlobal {

    @Id
    @Column(name = "year")
    public String year;

    @Column(name = "global_anomaly")
    public double global_anomaly;


    public V1MonthlyGlobal() {
    }


    public V1MonthlyGlobal(String year, double global_anomaly) {
        this.year = year;
        this.global_anomaly = global_anomaly;
    }

    
    
}
