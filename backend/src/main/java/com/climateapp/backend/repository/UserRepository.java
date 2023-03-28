package com.climateapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.climateapp.backend.data.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, String> {
    Users findIdByUsername(String username);

    Users findByUsername(String username);

    Users findPasswordByUsername(String username);

   // Users findById(String username);
    

   // Users deleteById(String username);
   
    Users findByUsernameAndPassword(String username, String password);

}