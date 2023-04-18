package com.climateapp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.climateapp.backend.data.database.testicustom;
import com.climateapp.backend.repository.CustomViewRepository;

@Service
public class CustomViewService {
    @Autowired
    CustomViewRepository customViewRepository;

    public testicustom saveView(
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
        testicustom c = new testicustom(username, v1text, v2text, v3text, v4text, v5text, visu1, visu2, visu3, visu4, visu5,
                url, parallel);
        customViewRepository.save(c);
        return c;
    }

    public List<testicustom> getCustomView(String url) {
        return customViewRepository.findByUrl(url);
    }
}
