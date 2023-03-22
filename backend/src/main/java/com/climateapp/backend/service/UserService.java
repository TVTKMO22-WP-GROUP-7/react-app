package com.climateapp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.climateapp.backend.repository.UserRepository;

import com.climateapp.backend.data.Users;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public Users register(String username, String password) {
        BCryptPasswordEncoder enc = new BCryptPasswordEncoder();
        Users u = new Users(username, enc.encode(password));
        userRepository.save(u);
        return u;
    }

}
