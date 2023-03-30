package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.climateapp.backend.data.V5All;

import org.springframework.data.jpa.repository.Query;

public interface V5AllRepo extends JpaRepository<V5All, String>{
    @Query(value= "SELECT * FROM v5_all", nativeQuery = true)
    List<V5All> getAll();
    
}
