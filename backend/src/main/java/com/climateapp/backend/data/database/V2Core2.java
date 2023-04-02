package com.climateapp.backend.data.database;
import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "v2_icecore2")
public class V2Core2 {

    @Id
    @Column(name = "year")
    public String year;

    @Column(name = "co2")
    public double co2;


    public V2Core2() {
    }


    public V2Core2(String year, double co2) {
        this.year = year;
        this.co2 = co2;
    }

    public List<V2Core2> getAll() {
        return null;
    }
    
}