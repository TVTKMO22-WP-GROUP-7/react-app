package com.climateapp.backend.controller;

import org.springframework.http.HttpStatus;
//import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

//import org.springframework.web.bind.annotation.PathVariable;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        String token = uService.login(username, password);
        if (token == null) {
            return new ResponseEntity<>("Wrong username or password", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    //get private data (username and bearer token)
    @GetMapping("/private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer) {
        
        if(bearer != null) {
            if(bearer.startsWith("Bearer")){
                String token = bearer.split(" ")[1];
                String username = uService.validateJwt(token);
                if(username != null) {
                    return new ResponseEntity<>("Private data "+username + " bearerToken: "+ token, HttpStatus.OK);
                }
            }
           return new ResponseEntity<>("Invalid token", HttpStatus.FORBIDDEN);
        }     
        return new ResponseEntity<>("No authorization header", HttpStatus.UNAUTHORIZED);
    }

    @PutMapping("/changepassword")
    public ResponseEntity<String> changePassword(@RequestParam String username, @RequestParam String oldPassword,
            @RequestParam String newPassword) {
        Users u = uService.changePassword(username, oldPassword, newPassword);
        if (u == null) {
            String e = "Check that you've written right username and current password";
            return new ResponseEntity<>(e, HttpStatus.FORBIDDEN);
        }
        String e = "Password changed";
        return new ResponseEntity<>(e, HttpStatus.OK);
    }


        
    @DeleteMapping("/deleteaccount")
    public ResponseEntity<String> deleteAccount(
            @RequestParam String username,
            @RequestParam String password) {
        Users u = uService.deleteAccount(username, password);
        if (u == null) {
            return new ResponseEntity<>("Check that you've written right password", HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>("Account deleted", HttpStatus.OK);
    }

        @GetMapping("/users")
    List<Users> getUsers() {
        return userRepository.findAll();}
               
}


