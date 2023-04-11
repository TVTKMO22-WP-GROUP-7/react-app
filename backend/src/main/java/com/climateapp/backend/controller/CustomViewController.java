package com.climateapp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.climateapp.backend.service.CustomViewService;

@RestController
@CrossOrigin(origins = "*")
public class CustomViewController {
    @Autowired
    CustomViewService customViewService;
    
}
