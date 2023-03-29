package com.climateapp.backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import com.climateapp.backend.data.V1MonthlySouth;

public interface V1MonthlySouthRepo extends JpaRepository<V1MonthlySouth, String> {
    @Query(value = "SELECT * FROM v1_monthlysouth", nativeQuery = true)
    List<V1MonthlySouth> getAll();
}
