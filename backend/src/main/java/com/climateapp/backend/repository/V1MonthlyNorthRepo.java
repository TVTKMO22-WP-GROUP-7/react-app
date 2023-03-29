package com.climateapp.backend.repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.jpa.repository.JpaRepository;

import com.climateapp.backend.data.V1MonthlyNorth;

public interface V1MonthlyNorthRepo extends JpaRepository<V1MonthlyNorth, String>{
    @Query(value = "SELECT * FROM v1_monthlynorth", nativeQuery = true)
    List<V1MonthlyNorth> getAll();
}
