package com.climateapp.backend.repository.database;

import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V1MonthlySouth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface V1MonthlySouthRepo extends JpaRepository<V1MonthlySouth, String> {
    @Query(value = "SELECT * FROM v1_monthlysouth", nativeQuery = true)
    List<V1MonthlySouth> getAll();
}
