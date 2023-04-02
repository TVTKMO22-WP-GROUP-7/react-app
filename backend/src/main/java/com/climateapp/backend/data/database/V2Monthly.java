package com.climateapp.backend.data.database;
import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "v2_monthly")
public class V2Monthly {

    @Id
    @Column(name = "year")
    public String year;

    @Column(name = "month")
    public double month;

    @Column(name = "decimaldate")
    public double decimaldate;

    @Column(name = "average")
    public double average;


    public V2Monthly() {
    }


    public V2Monthly(String year, double month, double decimaldate, double average) {
        this.year = year;
        this.month = month;
        this.decimaldate= decimaldate;
        this.average = average;
    }

    public List<V2Monthly> getAll() {
        return null;
    }
    
}