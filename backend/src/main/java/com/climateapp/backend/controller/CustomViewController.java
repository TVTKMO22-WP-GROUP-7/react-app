package com.climateapp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

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
    public ResponseEntity<String> saveView(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String textv1 = request.get("textv1");
        String textv2 = request.get("textv2");
        String textv3 = request.get("textv3");
        String textv4 = request.get("textv4");
        String textv5 = request.get("textv5");
        Boolean visu1 = Boolean.parseBoolean(request.get("visu1"));
        Boolean visu2 = Boolean.parseBoolean(request.get("visu2"));
        Boolean visu3 = Boolean.parseBoolean(request.get("visu3"));
        Boolean visu4 = Boolean.parseBoolean(request.get("visu4"));
        Boolean visu5 = Boolean.parseBoolean(request.get("visu5"));
        String url = request.get("url");
        Boolean paraller = Boolean.parseBoolean(request.get("paraller"));

        customViewService.saveView(username, textv1, textv2, textv3, textv4, textv5, visu1, visu2, visu3, visu4, visu5,
                url, paraller);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

}
