package com.climateapp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Map;
import java.util.List;

import com.climateapp.backend.repository.CustomViewRepository;
import com.climateapp.backend.service.CustomViewService;
import com.climateapp.backend.data.database.testicustom;


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
        String textv1 = request.get("v1text");
        String textv2 = request.get("v2text");
        String textv3 = request.get("v3text");
        String textv4 = request.get("v4text");
        String textv5 = request.get("v5text");
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

    @GetMapping("/{url}")
    public List<testicustom> getCustomView(@PathVariable String url) {
        return customViewService.getCustomView(url);
    }

    @GetMapping("/customviews")
    public ResponseEntity<List<testicustom>> getCustomViews(@RequestParam String username) {
        List<testicustom> customViews = customViewService.getCustom(username);
        return new ResponseEntity<>(customViews, HttpStatus.OK);
    }

}