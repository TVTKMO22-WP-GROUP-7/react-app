package com.climateapp.backend.repository.database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V1Reconstruction;

public interface V1ReconstructionRepository extends JpaRepository<V1Reconstruction, Integer> {

    @Query(value = "SELECT * FROM v1_reconstruction", nativeQuery = true)
    List<V1Reconstruction> getAll();
}