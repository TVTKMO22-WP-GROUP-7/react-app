package com.climateapp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.Map;
import java.util.List;

import com.climateapp.backend.repository.CustomViewRepository;
import com.climateapp.backend.repository.UserRepository;
import com.climateapp.backend.service.CustomViewService;
import com.climateapp.backend.data.database.CustomView;
import com.climateapp.backend.data.Users;

@RestController
@CrossOrigin(origins = "*")
public class CustomViewController {
    @Autowired
    CustomViewService customViewService;

    @Autowired
    CustomViewRepository customViewRepository;

    @Autowired
    UserRepository UserRepository;

    // method to save a custom view
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
        Boolean parallel = Boolean.parseBoolean(request.get("parallel"));

        Users userExists = UserRepository.findByUsername(username);
        if (userExists == null) {
            return new ResponseEntity<>("The username does not exist", HttpStatus.NOT_FOUND);
        } else {
            customViewService.saveView(username, textv1, textv2, textv3, textv4, textv5, visu1, visu2, visu3, visu4,
                    visu5,
                    url, parallel);
            return new ResponseEntity<>("OK", HttpStatus.OK);
        }

    }

    //method to get a custom view by url
    @GetMapping("/custom/{url}")
    public ResponseEntity<List<CustomView>> getCustomView(@PathVariable String url) {
        List<CustomView> customView = customViewService.getCustomView(url);
        if (customView == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(customView, HttpStatus.OK);
    }

    //method to get all custom views by username
    @GetMapping("/customviews")
    public ResponseEntity<List<CustomView>> getCustomViews(@RequestParam String username) {
        List<CustomView> customViews = customViewService.getCustom(username);
        if (customViews == null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(customViews, HttpStatus.OK);
    }

    //method to delete a custom view
    @DeleteMapping("customviews/delete")
    public ResponseEntity<String> deleteCustomView(@RequestBody Map<String, Long> requestBody) {
        Long id = requestBody.get("id");
        customViewService.deleteView(id);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

}