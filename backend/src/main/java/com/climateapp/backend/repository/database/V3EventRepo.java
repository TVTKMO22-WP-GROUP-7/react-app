package com.climateapp.backend.repository.database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V3EventTime;

public interface V3EventRepo extends JpaRepository<V3EventTime, String> {
    @Query(value = "SELECT * FROM v3_event", nativeQuery = true) 
    List<V3EventTime> getAll();
        
   
}
