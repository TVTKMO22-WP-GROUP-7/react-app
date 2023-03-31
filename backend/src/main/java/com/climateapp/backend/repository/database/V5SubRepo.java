package com.climateapp.backend.repository.database;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V5Sub;

public interface V5SubRepo extends JpaRepository<V5Sub, String>{
    @Query(value= "SELECT * FROM v5_sub", nativeQuery = true)
    List<V5Sub> getAll();
    
}
