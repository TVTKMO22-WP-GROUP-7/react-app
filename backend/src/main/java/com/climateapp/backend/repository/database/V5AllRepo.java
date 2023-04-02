package com.climateapp.backend.repository.database;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import java.util.Map;
import com.climateapp.backend.data.database.V5All;

public interface V5AllRepo extends JpaRepository<V5All, String> {
    @Query(value= "SELECT * FROM v5_all", nativeQuery = true)
    List<Map<String, Object>> getAll();

}
