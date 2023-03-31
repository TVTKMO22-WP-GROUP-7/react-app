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
    @Column(name = "time")
    public String time;

    @Column (name = "event")
    public String event;

    public V3EventTime() {

    }


    public V3EventTime(String time, String event){
    this.time = time;
    this.event = event;
    }


    public List<V3EventTime> getAll() {
        return null;
    }
}
