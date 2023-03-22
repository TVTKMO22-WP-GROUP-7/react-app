package com.climateapp.backend.repository;

import com.climateapp.backend.data.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserAccount, Long> {

    UserAccount findByUsername(String username);
}