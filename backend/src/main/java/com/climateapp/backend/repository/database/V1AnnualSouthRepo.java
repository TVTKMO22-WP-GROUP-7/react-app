package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V1AnnualSouth;

import org.springframework.data.jpa.repository.JpaRepository;

public interface V1AnnualSouthRepo extends JpaRepository<V1AnnualSouth, String> {
    @Query(value = "SELECT * FROM v1_annualsouth", nativeQuery = true)
    List<V1AnnualSouth> getAll();
}
