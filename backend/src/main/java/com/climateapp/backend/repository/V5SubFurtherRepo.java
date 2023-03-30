package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.climateapp.backend.data.V5SubFurther;

import org.springframework.data.jpa.repository.Query;

public interface V5SubFurtherRepo extends JpaRepository<V5SubFurther, String>{
    @Query(value= "SELECT * FROM v5_subfurther", nativeQuery = true)
    List<V5SubFurther> getAll();
    
}
