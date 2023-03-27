package com.climateapp.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.climateapp.backend.data.Users;
import com.climateapp.backend.repository.UserRepository;
import com.climateapp.backend.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService uService;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestParam String username,
            @RequestParam String password) {
        Users u = uService.register(username, password);
        if (u == null) {
            String e = "Username " + username + " already exists!";
            return new ResponseEntity<>(e, HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(u.username, HttpStatus.OK);
    }

    @PutMapping("/changepassword")
    public ResponseEntity<String> changePassword(@RequestParam String username, @RequestParam String oldPassword,
            @RequestParam String newPassword) {
        Users u = uService.changePassword(username, oldPassword, newPassword);
        if( u == null) {
            String e = "Check that you've written right username and current password";
            return new ResponseEntity<>(e, HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>(u.getPassword(), HttpStatus.OK);
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            return "Id not found";
        }
        userRepository.deleteById(id);
        return "User has been deleted";
    }

}
