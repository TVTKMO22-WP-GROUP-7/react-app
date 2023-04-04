package com.climateapp.backend.service;

import java.util.List;
<<<<<<< HEAD
=======
//import java.util.Map;
>>>>>>> 0d28f78b5f5c3c2dddc6ed4ca6b58214d35213d2

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.climateapp.backend.repository.database.*;
import com.climateapp.backend.data.database.*;

@CrossOrigin
@Service
public class DataService {

    @Autowired
    V1AnnualGlobalRepo V1AnnualGlobalRepo;

    @Autowired
    V1AnnualNorthRepo V1AnnualNorthRepo;

    @Autowired
    V1AnnualSouthRepo V1AnnualSouthRepo;

    @Autowired
    V1MonthlyGlobalRepo V1MonthlyGlobalRepo;

    @Autowired
    V1MonthlyNorthRepo V1MonthlyNorthRepo;

    @Autowired
    V1MonthlySouthRepo V1MonthlySouthRepo;

    @Autowired
    V1ReconstructionRepository V1RecoRepo;

    @Autowired
    V2AnnualRepo V2AnnualRepo;

    @Autowired
    V2MonthlyRepo V2MonthlyRepo;

    @Autowired
    V2Core1Repo V2Core1Repo;

    @Autowired
    V2Core2Repo V2Core2Repo;

    @Autowired
    V2Core3Repo V2Core3Repo;

    @Autowired
    V3CarbonRepo V3CarbonRepo;

    @Autowired
    V3EventRepo V3EventRepo;

    @Autowired
    V3GlobalRepo V3GlobalRepo;
    
    @Autowired
    V5AllRepo V5AllRepo;

    @Autowired
    V5EnergyRepo V5EnergyRepo;

    @Autowired
    V5IndustrialRepo V5IndustrialRepo;

    @Autowired
    V5WasteRepo V5WasteRepo;

    @Autowired
    V5AfoluRepo V5AfoluRepo;

    public List<V1AnnualGlobal> getAnnualGlobal() {
        return V1AnnualGlobalRepo.getAll();
    }

    public List<V1AnnualNorth> getAnnualNorth() {
        return V1AnnualNorthRepo.getAll();
    }

    public List<V1AnnualSouth> getAnnualSouth() {
        return V1AnnualSouthRepo.getAll();
    }

    public List<V1MonthlyGlobal> getMonthlyGlobal() {
        return V1MonthlyGlobalRepo.getAll();
    }

    public List<V1MonthlyNorth> getMonthlyNorth() {
        return V1MonthlyNorthRepo.getAll();
    }

    public List<V1MonthlySouth> getMonthlySouth() {
        return V1MonthlySouthRepo.getAll();
    }

    public List<V1reconstruction> getV1Reconstruction() {
        return V1RecoRepo.getAll();
    }
    
    public List<V2Annual> getV2Annual() {
        return V2AnnualRepo.getAll();
    }

    public List<V2Monthly> getV2Monthly() {
        return V2MonthlyRepo.getAll();
    }

    public List<V2Core1> getV2Core1() {
        return V2Core1Repo.getAll();
    }

    public List<V2Core2> getV2Core2() {
        return V2Core2Repo.getAll();
    }

    public List<V2Core3> getV2Core3() {
        return V2Core3Repo.getAll();
    }

    public List<V3Carbon> getV3Carbon() {
        return V3CarbonRepo.getAll();
    }

    public List<V3Global> getV3Global() {
        return V3GlobalRepo.getAll();
    }

    public List<V3EventTime> getV3Event() {
        return V3EventRepo.getAll();
    }

    public List<V5All> getV5All() {
        return V5AllRepo.getAll();
    }

    public List<V5Energy> getV5Energy() {
        return V5EnergyRepo.getAll();
    }

    public List<V5Industrial> getV5Industrial() {
        return V5IndustrialRepo.getAll();
    }

    public List<V5Waste> getV5Waste() {
        return V5WasteRepo.getAll();
    }

    public List<V5Afolu> getV5Afolu() {
        return V5AfoluRepo.getAll();
    }

}
