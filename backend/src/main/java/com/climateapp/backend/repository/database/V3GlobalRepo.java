package com.climateapp.backend.repository.database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V3Global;

public interface V3GlobalRepo extends JpaRepository<V3Global, String> {
    @Query(value= "SELECT * FROM v3_global", nativeQuery = true)
    List<V3Global> getAll();
    
}
