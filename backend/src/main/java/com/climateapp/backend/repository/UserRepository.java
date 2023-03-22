package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.climateapp.backend.data.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

}

