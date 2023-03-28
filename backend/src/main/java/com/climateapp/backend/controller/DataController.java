package com.climateapp.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.climateapp.backend.service.DataService;

import com.climateapp.backend.data.*;

@RestController
@CrossOrigin(origins = "*")
public class DataController {
    @Autowired
    DataService dService;

    @GetMapping("/v1annual")
    public List<v1annual> getV1Annual()
    {
        return dService.getV1Annual();
    }

    @GetMapping("/v1monthly")
    public List<v1monthly> getV1Monthly()
    {
        return dService.getV1Monthly();
    }

    @GetMapping("/v1reconstruction")
    public List<V1reconstruction> getV1Reconstruction()
    {
        return dService.getV1Reconstruction();
    }
}
