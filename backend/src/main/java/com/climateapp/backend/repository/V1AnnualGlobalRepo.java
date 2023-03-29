package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.climateapp.backend.data.V1AnnualGlobal;

import org.springframework.data.jpa.repository.Query;

public interface V1AnnualGlobalRepo extends JpaRepository<V1AnnualGlobal, String> {
    @Query(value = "SELECT * FROM v1_annualglobal", nativeQuery = true)
    List<V1AnnualGlobal> getAll();
    
}
