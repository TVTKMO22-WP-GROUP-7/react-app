package com.climateapp.backend.data.database;
import java.util.List;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name= "v3_event")
public class V3EventTime {

    @Id
    @Column(name = "yearE")
    public String yearE;

    @Column (name = "event")
    public String event;

    @Column (name = "years_ago")
    public String years_ago;

    @Column (name = "id")
    public String id;

    public V3EventTime() {

    }


    public V3EventTime(String yearE, String event, String years_ago, String id){
    this.yearE = yearE;
    this.event = event;
    this.years_ago = years_ago;
    this.id = id;
    }


    public List<V3EventTime> getAll() {
        return null;
    }
}
