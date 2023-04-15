package com.climateapp.backend.controller;

import java.util.List;
import java.util.Map;

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

    @GetMapping("/v1annualglobal")
    public List<V1AnnualGlobal> getAnnualGlobal() {
        return dService.getAnnualGlobal();
    }

    @GetMapping("/v1annualnorth")
    public List<V1AnnualNorth> getAnnualNorth() {
        return dService.getAnnualNorth();
    }

    @GetMapping("/v1annualsouth")
    public List<V1AnnualSouth> getAnnualSouth() {
        return dService.getAnnualSouth();
    }

    @GetMapping("/v1monthlyglobal")
    public List<V1MonthlyGlobal> getMonthlyGlobal() {
        return dService.getMonthlyGlobal();
    }

    @GetMapping("/v1monthlynorth")
    public List<V1MonthlyNorth> getMonthlyNorth() {
        return dService.getMonthlyNorth();
    }

    @GetMapping("/v1monthlysouth")
    public List<V1MonthlySouth> getMonthlySouth() {
        return dService.getMonthlySouth();
    }

    @GetMapping("/v1reconstruction")
    public List<V1Reco> getV1Reconstruction() {
        return dService.getV1Reconstruction();
    }

    @GetMapping("/v2annual")
    public List<V2Annual> getV2Annual() {
        return dService.getV2Annual();
    }

    @GetMapping("/v2monthly")
    public List<V2Monthly> getV2Monthly() {
        return dService.getV2Monthly();
    }

    @GetMapping("/v2core1")
    public List<V2Core1> getV2Core1() {
        return dService.getV2Core1();
    }

    @GetMapping("/v2core2")
    public List<V2Core2> getV2Core2() {
        return dService.getV2Core2();
    }

    @GetMapping("/v2core3")
    public List<V2Core3> getV2Core3() {
        return dService.getV2Core3();
    }

    @GetMapping("/v3event")
    public List<V3EventTime> getV3EventTime() {
        return dService.getV3Event();
    }

    @GetMapping("/v3global")
    public List<V3Global> getV3Global() {
        return dService.getV3Global();
    }

    @GetMapping("/v3carbon")
    public List<V3Carbon> getV3Carbon() {
        return dService.getV3Carbon();
    }

    @GetMapping("v4emissions")
    public List<Map<String, Object>> getV4Emissions() {
        return dService.getV4Emissions();
    }

    @GetMapping("/v5all")
    public List<V5All> getV5All() {
        return dService.getV5All();
    }

    @GetMapping("/v5energy")
    public List<V5Energy> getV5Energy() {
        return dService.getV5Energy();
    }

    @GetMapping("v5industrial")
    public List<V5Industrial> getV5Industrial() {
        return dService.getV5Industrial();
    }

    @GetMapping("v5waste")
    public List<V5Waste> getV5Waste() {
        return dService.getV5Waste();
    }

    @GetMapping("v5afolu")
    public List<V5Afolu> getV5Afolu(){
        return dService.getV5Afolu();
    }
}
