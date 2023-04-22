package com.climateapp.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.climateapp.backend.data.Users;
import com.climateapp.backend.repository.CustomViewRepository;
import com.climateapp.backend.repository.UserRepository;
import com.climateapp.backend.service.CustomViewService;
import com.climateapp.backend.service.UserService;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService uService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CustomViewService customViewService;

    @Autowired
    CustomViewRepository customViewRepository;

   

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Map<String, String> request) {

        String username = request.get("username");
        String password = request.get("password");

        if (username != null && !username.isEmpty() && password != null && !password.isEmpty()) {
            Users u = uService.register(username, password);
            if (u == null) {
                String e = "Username " + username + " already exists!";
                return new ResponseEntity<>(e, HttpStatus.FORBIDDEN);
            }
            return new ResponseEntity<>(u.username, HttpStatus.OK);
        }
        return new ResponseEntity<>("Username and password are required", HttpStatus.FORBIDDEN);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");
        String token = uService.login(username, password);
        if (token == null) {
            return new ResponseEntity<>("Wrong username or password", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    // get private data (username and bearer token)
    @GetMapping("/private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer) {

        if (bearer != null) {
            if (bearer.startsWith("Bearer")) {
                String token = bearer.split(" ")[1];
                String username = uService.validateJwt(token);
                if (username != null) {
                    return new ResponseEntity<>("Private data " + username + " bearerToken: " + token, HttpStatus.OK);
                }
            }
            return new ResponseEntity<>("Invalid token", HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<>("No authorization header", HttpStatus.UNAUTHORIZED);
    }

    @PutMapping("/changepassword")
    public ResponseEntity<String> changePassword(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");
        String newPassword = request.get("newPassword");
        if (newPassword != null && !newPassword.isEmpty()) {
            Users u = uService.changePassword(username, password, newPassword);
            if (u == null) {
                return new ResponseEntity<>("Check that you've written right username and current password",
                        HttpStatus.FORBIDDEN);
            }
            return new ResponseEntity<>("Password changed", HttpStatus.OK);
        }
        return new ResponseEntity<>("New password can not be empty", HttpStatus.FORBIDDEN);
    }


//Request for deleting account
    @DeleteMapping("/deleteaccount")
    public ResponseEntity<String> deleteAccount(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");
    
        if (username == null  || password == null ) {
            return new ResponseEntity<>("Username and password are required", HttpStatus.FORBIDDEN);
        }
    
        Users u = uService.deleteAccount(username, password);
        if (u == null) {
            return new ResponseEntity<>("Check that you've written right username or password",
                    HttpStatus.FORBIDDEN);
        }
    
        return new ResponseEntity<>("Account deleted", HttpStatus.OK);
    }
  




    @GetMapping("/users")
    List<Users> getUsers() {
        return userRepository.findAll();
    }

}
