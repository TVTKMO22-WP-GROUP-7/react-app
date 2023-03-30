package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.climateapp.backend.data.V5Sub;

import org.springframework.data.jpa.repository.Query;

public interface V5SubRepo extends JpaRepository<V5Sub, String>{
    @Query(value= "SELECT * FROM v5_sub", nativeQuery = true)
    List<V5Sub> getAll();
    
}
