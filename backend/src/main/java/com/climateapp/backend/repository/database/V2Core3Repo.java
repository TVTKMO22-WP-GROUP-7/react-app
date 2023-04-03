package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V2Core3;


public interface V2Core3Repo extends JpaRepository<V2Core3, String> {
    @Query(value = "SELECT * FROM v2_icecore3", nativeQuery = true)
    List<V2Core3> getAll();
}