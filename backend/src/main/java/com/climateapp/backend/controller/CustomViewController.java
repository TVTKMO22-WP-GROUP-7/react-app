package com.climateapp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.climateapp.backend.repository.CustomViewRepository;
import com.climateapp.backend.service.CustomViewService;

@RestController
@CrossOrigin(origins = "*")
public class CustomViewController {
    @Autowired
    CustomViewService customViewService;

    @Autowired 
    CustomViewRepository customViewRepository;

    
    @PostMapping("/custompage")
    public ResponseEntity<String> saveView(
            @RequestParam Integer id,
            @RequestParam String userID,
            @RequestParam Boolean visu1,
            @RequestParam Boolean visu2,
            @RequestParam Boolean visu3,
            @RequestParam Boolean visu4,
            @RequestParam Boolean visu5,

            @RequestParam String textv1,
            @RequestParam String textv2,
            @RequestParam String textv3,
            @RequestParam String textv4,
            @RequestParam String textv5
) {
        
        customViewService.saveView(userID, id, visu1, visu2, visu3, visu4, visu5, textv1, textv2, textv3, textv4, textv5);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    
}
