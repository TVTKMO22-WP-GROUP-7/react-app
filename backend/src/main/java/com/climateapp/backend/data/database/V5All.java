package com.climateapp.backend.data.database;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="v5_all")
public class V5All {

    @Id
    @Column(name= "sector")
    public String sector;

    @Column(name= "share")
    public double share;

    public V5All() {
    }

    public V5All(String sector, double share) {
        this.sector = sector;
        this.share = share;
    }
    
}
