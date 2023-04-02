package com.climateapp.backend.repository.database;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateapp.backend.data.database.V2Core2;


public interface V2Core2Repo extends JpaRepository<V2Core2, String> {
    @Query(value = "SELECT * FROM v2_icecore2", nativeQuery = true)
    List<V2Core2> getAll();
}