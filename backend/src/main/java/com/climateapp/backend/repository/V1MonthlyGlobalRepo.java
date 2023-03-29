package com.climateapp.backend.repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.jpa.repository.JpaRepository;

import com.climateapp.backend.data.V1MonthlyGlobal;

public interface V1MonthlyGlobalRepo extends JpaRepository<V1MonthlyGlobal, String> {
    @Query(value = "SELECT * FROM v1_monthlyglobal", nativeQuery = true)
    List<V1MonthlyGlobal> getAll();
}
