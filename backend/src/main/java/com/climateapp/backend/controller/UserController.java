package com.climateapp.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.climateapp.backend.data.Users;
import com.climateapp.backend.service.UserService;

@RestController
public class UserController {

    @Autowired
    UserService uService;

    @PostMapping("register")
    public ResponseEntity<String> register(@RequestParam String username, @RequestParam String password) {
        Users u = uService.register(username, password);
        return new ResponseEntity<>(u.username, HttpStatus.OK);
    }

    @PostMapping("changepassword")
    public ResponseEntity<String> changePassword(@RequestParam String username, @RequestParam String password) {
        Users u = uService.changePassword(username, password);
        return new ResponseEntity<>(u.username, HttpStatus.OK);
    }
}
