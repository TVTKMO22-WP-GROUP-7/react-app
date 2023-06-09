package com.climateapp.backend.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.climateapp.backend.repository.CustomViewRepository;
import com.climateapp.backend.repository.UserRepository;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.climateapp.backend.data.Users;
import com.climateapp.backend.data.database.CustomView;
import java.util.List;



@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    CustomViewRepository customViewRepository;

    @Autowired
    PasswordEncoder enc;

    // sercet key for JWT token (can be found in application.properties)
    @Value("${jwt.secret}")
    private String jwtKey;

    public Users register(String username, String password) {
        Users u = new Users(username, enc.encode(password));
        Users existingUser = userRepository.findByUsername(username);
        if (existingUser != null && existingUser.getUsername() != null && !existingUser.getUsername().isEmpty()) {
            return null;
        }
        userRepository.save(u);
        return u;
    }

    // Create JWT token for user using algorithm and secret key
    public String login(String username, String password) {
        Users u = userRepository.findByUsername(username);
        if (u == null || !enc.matches(password, u.getPassword())) {
            return null;
        }

        Algorithm alg = Algorithm.HMAC256(jwtKey);
        return JWT.create().withSubject(u.username).sign(alg);
    }

    // Verify JWT token and return username if token is valid
    public String validateJwt(String jwtToken) {
        Algorithm alg = Algorithm.HMAC256(jwtKey);
        JWTVerifier verifier = JWT.require(alg).build();
        try {
            DecodedJWT jwt = verifier.verify(jwtToken);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
            // Something something something
        }
        return null;
    }

    public Users changePassword(String username, String password, String newPassword) {
        Users u = userRepository.findIdByUsername(username);
        if (u != null && enc.matches(password, u.password)) {
            u.setPassword(enc.encode(newPassword));
            userRepository.save(u);
            return u;
        }
        return null;
    }

//delete

public Users deleteAccount(String username, String password) {
    Users u = userRepository.findByUsername(username);
    if (u != null && enc.matches(password, u.password)) {
        List<CustomView> customViews = customViewRepository.findByUsername(username);
        customViewRepository.deleteAll(customViews);
        userRepository.delete(u);
        return u;
    }
    return null;
}
}


