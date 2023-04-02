package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.climateapp.backend.data.database.V3Carbon;


public interface V3CarbonRepo extends JpaRepository<V3Carbon, Integer> {
    @Query(value = "SELECT * FROM v3_carbon", nativeQuery = true)
    List<V3Carbon> getAll();
}
