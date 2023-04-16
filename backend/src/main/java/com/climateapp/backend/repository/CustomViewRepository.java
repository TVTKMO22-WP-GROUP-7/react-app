package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climateapp.backend.data.database.testicustom;

@Repository
public interface CustomViewRepository extends JpaRepository<testicustom, String> {
    
}
