package com.climateapp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.climateapp.backend.data.Users;
import com.climateapp.backend.service.UserService;

@RestController
public class UserController {
    UserService uService;

    @Autowired
    public UserController(UserService uService) {
        this.uService = uService;
    }

    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
       Users newUser = uService.register(user);
       return newUser;
    }
}
