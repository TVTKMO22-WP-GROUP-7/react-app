package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V1MonthlyNorth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface V1MonthlyNorthRepo extends JpaRepository<V1MonthlyNorth, String>{
    @Query(value = "SELECT * FROM v1_monthlynorth", nativeQuery = true)
    List<V1MonthlyNorth> getAll();
}
