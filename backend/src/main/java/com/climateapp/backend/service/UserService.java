package com.climateapp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateapp.backend.repository.UserRepository;

import com.climateapp.backend.data.Users;

@Service
public class UserService {
    @Autowired
    UserRepository UserRepository;

    public Users register(Users user) {
       return UserRepository.save(user);
    }

}
