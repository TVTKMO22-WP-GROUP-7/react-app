package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.climateapp.backend.data.CustomView;

public interface CustomViewRepository extends JpaRepository<CustomView, String> {
    
}
