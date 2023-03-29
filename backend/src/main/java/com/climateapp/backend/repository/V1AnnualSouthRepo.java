package com.climateapp.backend.repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.jpa.repository.JpaRepository;

import com.climateapp.backend.data.V1AnnualSouth;

public interface V1AnnualSouthRepo extends JpaRepository<V1AnnualSouth, String> {
    @Query(value = "SELECT * FROM v1_annualsouth", nativeQuery = true)
    List<V1AnnualSouth> getAll();
}
