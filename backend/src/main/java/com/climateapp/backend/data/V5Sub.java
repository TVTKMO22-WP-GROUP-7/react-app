package com.climateapp.backend.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "v5_sub")
public class V5Sub {

    @Id
    @Column(name= "sector")
    public String sector;

    @Column(name= "share")
    public double share;

    public V5Sub() {
    }

    public V5Sub(String sector, double share) {
        this.sector = sector;
        this.share = share;
    }
    
}
