package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V2Monthly;


public interface V2MonthlyRepo extends JpaRepository<V2Monthly, String> {
    @Query(value = "SELECT * FROM v2_monthly", nativeQuery = true)
    List<V2Monthly> getAll();
}