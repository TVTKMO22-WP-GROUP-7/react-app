package com.climateapp.backend.repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.jpa.repository.JpaRepository;

import com.climateapp.backend.data.V1AnnualNorth;

public interface V1AnnualNorthRepo extends JpaRepository<V1AnnualNorth, String>{
    @Query(value = "SELECT * FROM v1_annualnorth", nativeQuery = true)
    List<V1AnnualNorth> getAll();
}
