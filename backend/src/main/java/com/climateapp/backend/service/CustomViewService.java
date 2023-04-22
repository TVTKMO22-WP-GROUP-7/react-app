package com.climateapp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.climateapp.backend.data.database.CustomView;
import com.climateapp.backend.repository.CustomViewRepository;

import jakarta.transaction.Transactional;



@Service
public class CustomViewService {
    @Autowired
    CustomViewRepository customViewRepository;

    public CustomView saveView(
            String username,
            String v1text,
            String v2text,
            String v3text,
            String v4text,
            String v5text,
            Boolean visu1,
            Boolean visu2,
            Boolean visu3,
            Boolean visu4,
            Boolean visu5,
            String url,
            Boolean parallel) {
        CustomView c = new CustomView(username, v1text, v2text, v3text, v4text, v5text, visu1, visu2, visu3, visu4, visu5,
                url, parallel);
        customViewRepository.save(c);
        return c;
    }

    public List<CustomView> getCustomView(String url) {
        return customViewRepository.findByUrl(url);
    }

    public List<CustomView> getCustom(String username){
        return customViewRepository.findByUsername(username);
    }

    @Transactional
    public void deleteView(Long id) {
        customViewRepository.deleteById(id);
    }

    public List<CustomView> getViewsByUsername(String username){
        return customViewRepository.findByUsername(username);
    }





   


}
