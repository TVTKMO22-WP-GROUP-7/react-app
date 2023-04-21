package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.climateapp.backend.data.database.CustomView;

@Repository
public interface CustomViewRepository extends JpaRepository<CustomView, String> {
    @Query(value = "SELECT * FROM custom WHERE url = ?1", nativeQuery = true)
    List<CustomView> findByUrl(String url);

    @Query(value = "SELECT * FROM custom WHERE username = ?1", nativeQuery = true)
    List<CustomView> findByUsername(String username);

}
