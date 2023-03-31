package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V1AnnualNorth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface V1AnnualNorthRepo extends JpaRepository<V1AnnualNorth, String>{
    @Query(value = "SELECT * FROM v1_annualnorth", nativeQuery = true)
    List<V1AnnualNorth> getAll();
}
