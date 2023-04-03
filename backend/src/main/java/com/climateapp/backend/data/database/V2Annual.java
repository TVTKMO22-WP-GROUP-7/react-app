package com.climateapp.backend.data.database;
import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "v2_annual")
public class V2Annual {

    @Id
    @Column(name = "year")
    public String year;

    @Column(name = "mean")
    public double mean;


    public V2Annual() {
    }


    public V2Annual(String year, double mean) {
        this.year = year;
        this.mean = mean;
    }

    public List<V2Annual> getAll() {
        return null;
    }
    
}