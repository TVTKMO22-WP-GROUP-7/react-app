package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V1MonthlyGlobal;

import org.springframework.data.jpa.repository.JpaRepository;

public interface V1MonthlyGlobalRepo extends JpaRepository<V1MonthlyGlobal, String> {
    @Query(value = "SELECT * FROM v1_monthlyglobal", nativeQuery = true)
    List<V1MonthlyGlobal> getAll();
}
