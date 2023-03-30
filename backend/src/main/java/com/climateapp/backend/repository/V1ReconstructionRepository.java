package com.climateapp.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.climateapp.backend.data.V1Reconstruction;

import org.springframework.data.jpa.repository.Query;

public interface V1ReconstructionRepository extends JpaRepository<V1Reconstruction, Integer> {

    @Query(value = "SELECT * FROM v1_reconstruction", nativeQuery = true)
    List<V1Reconstruction> getAll();
}
