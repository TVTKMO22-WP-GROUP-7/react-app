package com.climateapp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateapp.backend.repository.CustomViewRepository;

@Service
public class CustomViewService {
    @Autowired
    CustomViewRepository customViewRepository;
}
