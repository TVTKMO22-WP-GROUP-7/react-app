package com.climateapp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateapp.backend.data.database.testicustom;
import com.climateapp.backend.repository.CustomViewRepository;

@Service
public class CustomViewService {
    @Autowired
    CustomViewRepository customViewRepository;


    public testicustom saveView(
        String userID,
        Integer id,
        Boolean visu1,
        Boolean visu2,
        Boolean visu3,
        Boolean visu4,
        Boolean visu5,
        String v1text,
        String v2text,
        String v3text,
        String v4text,
        String v5text)
        {
        testicustom c = new testicustom(id, userID, v1text, v2text, v3text, v4text, v5text, false, false, false, false, false);
        customViewRepository.save(c);
        return c;
}

}
