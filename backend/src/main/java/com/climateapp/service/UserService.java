package com.climateapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.climateapp.backend.UserAccount;
import com.climateapp.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserAccount register(UserAccount user) {
        return userRepository.save(user);
    }
}
