package com.climateapp.backend.data.database;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "v5_subfurther")
public class V5SubFurther {

    @Id
    @Column(name= "sector")
    public String sector;

    @Column(name= "share")
    public double share;

    public V5SubFurther() {
    }

    public V5SubFurther(String sector, double share) {
        this.sector = sector;
        this.share = share;
    }
    
}
