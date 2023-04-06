package com.climateapp.backend.repository.database;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V4Emissions;

public interface V4EmissionsRepo extends JpaRepository<V4Emissions, String> {
    @Query(value = "SELECT * FROM v4_emissions", nativeQuery = true)
    List<Map<String, Object>> getAll();
}
