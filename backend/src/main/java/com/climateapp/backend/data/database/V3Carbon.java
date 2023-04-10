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
    @Column ( name= "yearc")
    public String yearc;

    @Column(name = "carbondata")
    public double carbondata;

    @Column(name= "carbondixioxe")
    public double carbondixioxe;

    public V3Carbon () {

    }

    public V3Carbon (String yearc, double carbondata, double carbondixioxe){
        this.yearc = yearc;
        this.carbondata = carbondata;
        this.carbondixioxe = carbondixioxe;
     
    }

    public List<V3Carbon> getAll() {
        return null;
    }
}
