package com.climateapp.backend.data.database;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name ="v3_carbon")
public class V3Carbon {
    @Id
    @Column ( name= "yearC")
    public String yearC;

    @Column(name = "carbondata")
    public double carbondata;


    public V3Carbon () {

    }

    public V3Carbon (String yearC, double carbondata){
        this.yearC = yearC;
        this.carbondata = carbondata;
     
    }

    public List<V3Carbon> getAll() {
        return null;
    }
}
