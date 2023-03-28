package com.climateapp.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.climateapp.backend.repository.V1AnnualRepository;
import com.climateapp.backend.repository.V1MonthlyRepository;
import com.climateapp.backend.repository.V1ReconstructionRepository;
import com.climateapp.backend.data.*;


@CrossOrigin
@Service
public class DataService {

    @Autowired
    V1AnnualRepository V1AnnualRepo;

    @Autowired
    V1MonthlyRepository V1MonthlyRepo;

    @Autowired
    V1ReconstructionRepository V1RecoRepo;

    public List<v1annual> getV1Annual() {
        return V1AnnualRepo.findAll();
    }

    public List<v1monthly> getV1Monthly(){
        return V1MonthlyRepo.findAll();
    }

    public List<V1reconstruction> getV1Reconstruction(){
        return V1RecoRepo.findAll();
    }
}
