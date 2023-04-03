package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V2Annual;


public interface V2AnnualRepo extends JpaRepository<V2Annual, String> {
    @Query(value = "SELECT * FROM v2_annual", nativeQuery = true)
    List<V2Annual> getAll();
}