package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climateapp.backend.data.v1monthly;

@Repository
public interface V1MonthlyRepository extends JpaRepository<v1monthly, String> {
    
}
