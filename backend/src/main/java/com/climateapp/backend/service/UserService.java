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

    public Users changePassword(String username, String oldPassword, String newdPassword) {
        Users u = userRepository.findByUsername(username);
        if(u == null)
        {
            return null;
        }
       // return enc.matches(oldPassword, u.password) ? u : null;
        //if (currentPassword != null && enc.matches(oldPassword, currentPassword.getPassword())) {
           Users updatedUser = userRepository.findIdByUsername(username);
           updatedUser.setPassword(enc.encode(newdPassword));
           userRepository.save(updatedUser);
           return updatedUser;
        //}
        //return null;*/


    }
    public Users deleteAccount(String username, String password) {
        //Users checkPassword = userRepository.findPasswordByUsername(username);
        //if (checkPassword != null && enc.matches(password, checkPassword.getPassword())) {
            Users deleteUser = userRepository.findIdByUsername(username);
            userRepository.delete(deleteUser);
            return deleteUser;
        //}
        //return null;
    }


}
