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
    @Column (name= "time")
    public String time;

    @Column (name = "global")
    public double global;

    public V3Global() {
        
    }

    public V3Global(String time, double global){
        this.time = time;
        this.global = global;
    }

    public List<V3Global> getAll() {
        return null;
    }
}
