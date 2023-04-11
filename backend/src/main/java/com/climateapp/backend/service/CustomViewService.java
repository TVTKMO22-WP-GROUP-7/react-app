package com.climateapp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.climateapp.backend.repository.CustomViewRepository;

public class CustomViewService {
    @Autowired
    CustomViewRepository customViewRepository;
}
