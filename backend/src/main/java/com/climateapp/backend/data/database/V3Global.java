package com.climateapp.backend.data.database;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "v3_global")

public class V3Global {
    

    @Id
    @Column (name= "yearG")
    public String yearG;

    @Column (name = "global")
    public double global;


    public V3Global() {
        
    }

    public V3Global(String yearG, double global){
        this.yearG = yearG;
        this.global = global;

    }

    public List<V3Global> getAll() {
        return null;
    }
}
