package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.climateapp.backend.data.database.testicustom;

@Repository
public interface CustomViewRepository extends JpaRepository<testicustom, String> {
    @Query(value = "SELECT * FROM testicustom WHERE url = ?1", nativeQuery = true)
    List<testicustom> findByUrl(String url);

}
