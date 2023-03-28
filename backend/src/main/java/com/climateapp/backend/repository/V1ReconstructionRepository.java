package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.climateapp.backend.data.V1reconstruction;

public interface V1ReconstructionRepository extends JpaRepository<V1reconstruction, Integer>{
    
}
