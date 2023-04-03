package com.climateapp.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.climateapp.backend.service.DataService;

import com.climateapp.backend.data.database.*;


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

    @GetMapping("/v5all")
    public List<V5All> getV5All()
    {
        return dService.getV5All();
    }

    @GetMapping("/v5sub")
    public List<V5Sub> getV5Sub()
    {
        return dService.getV5Sub();
    }

    @GetMapping("/v5subfurther")
    public List<V5SubFurther> getV5SubFurther()
    {
        return dService.getV5SubFurther();
    }

    @GetMapping("/v3event")
    public List<V3EventTime> getV3EventTime(){
        return dService.getV3Event();
    }

    @GetMapping("/v3global")
    public List<V3Global> getV3Global(){
        return dService.getV3Global();
    }

    @GetMapping("/v3carbon")
        public List<V3Carbon> getV3Carbon(){
            return dService.getV3Carbon();
        }
    
    
    
}
