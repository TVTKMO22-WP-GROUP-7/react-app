package com.climateapp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateapp.backend.repository.UserRepository;

import com.climateapp.backend.data.Users;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder enc;

    public Users register(String username, String password) {
        Users u = new Users(username, enc.encode(password));
        Users existingUser = userRepository.findByUsername(username);
        if (existingUser != null && existingUser.getUsername() != null && !existingUser.getUsername().isEmpty()) {
            return null;
        }
        userRepository.save(u);
        return u;
    }

    public Users changePassword(String username, String oldPassword, String newPassword) {
        Users u = userRepository.findByUsername(username);
        if (u != null) {
            Users updatedUser = userRepository.findIdByUsername(username);
            //if (updatedUser.getPassword().equals(u.getPassword())) {
                updatedUser.setPassword(enc.encode(newPassword));
                userRepository.save(updatedUser);
                return updatedUser;
            }

       // }
        return null;

    }

    public Users deleteAccount(String username, String password) {
        Users u = userRepository.findByUsername(username);
        if (u != null) {
            Users deleteUser = userRepository.findIdByUsername(username);
           // if (deleteUser.getPassword().equals(u.getPassword())) {
                userRepository.delete(deleteUser);
                return deleteUser;
            }
       // }
        return null;
    }

}
