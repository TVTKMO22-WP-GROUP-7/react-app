package com.climateapp.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.climateapp.backend.data.v1annual;

@Repository
public interface V1AnnualRepository extends JpaRepository<v1annual, Integer >{
    
}
