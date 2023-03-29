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

    @GetMapping("/annualglobal")
    public List<V1AnnualGlobal> getAnnualGlobal(){
        return dService.getAnnualGlobal();
    }

    @GetMapping("/annualnorth")
    public List<V1AnnualNorth> getAnnualNorth(){
        return dService.getAnnualNorth();
    }

    @GetMapping("/annualsouth")
    public List<V1AnnualSouth> getAnnualSouth(){
        return dService.getAnnualSouth();
    }

    
    @GetMapping("/monthlyglobal")
    public List<V1MonthlyGlobal> getMonthlyGlobal(){
        return dService.getMonthlyGlobal();
    }

    @GetMapping("/monthlynorth")
    public List<V1MonthlyNorth> getMonthlyNorth(){
        return dService.getMonthlyNorth();
    }

    @GetMapping("/monthlysouth")
    public List<V1MonthlySouth> getMonthlySouth(){
        return dService.getMonthlySouth();
    }

    @GetMapping("/reconstruction")
    public List<V1reconstruction> getV1Reconstruction()
    {
        return dService.getV1Reconstruction();
    }
}
