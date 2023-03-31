package com.climateapp.backend.repository.database;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V1AnnualGlobal;

public interface V1AnnualGlobalRepo extends JpaRepository<V1AnnualGlobal, String> {
    @Query(value = "SELECT * FROM v1_annualglobal", nativeQuery = true)
    List<V1AnnualGlobal> getAll();
    
}
