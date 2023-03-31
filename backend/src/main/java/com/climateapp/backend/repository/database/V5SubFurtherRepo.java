package com.climateapp.backend.repository.database;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V5SubFurther;

public interface V5SubFurtherRepo extends JpaRepository<V5SubFurther, String>{
    @Query(value= "SELECT * FROM v5_subfurther", nativeQuery = true)
    List<V5SubFurther> getAll();
    
}
