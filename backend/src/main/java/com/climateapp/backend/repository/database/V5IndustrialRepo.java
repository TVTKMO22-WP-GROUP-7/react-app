package com.climateapp.backend.repository.database;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V5Industrial;

public interface V5IndustrialRepo extends JpaRepository<V5Industrial, String>{
    @Query(value= "SELECT * FROM v5_industrial", nativeQuery = true)
    List<V5Industrial> getAll();
    
}
