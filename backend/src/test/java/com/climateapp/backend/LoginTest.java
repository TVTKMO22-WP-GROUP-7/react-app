package com.climateapp.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.climateapp.backend.controller.UserController;
import com.climateapp.backend.service.UserService;

public class LoginTest {
    @Mock
    private UserService uService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    // Should return a response entity with status code 200 and the token
    @Test
    public void testLoginSuccess() {
        // Arrange
        String username = "testuser";
        String password = "testpassword";
        String token = "testtoken";

        // Mock the UserService.login method to return a token
        when(uService.login(username, password)).thenReturn(token);

        // Create the request body
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("username", username);
        requestBody.put("password", password);

        // Act
        ResponseEntity<String> response = userController.login(requestBody);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(token, response.getBody());
    }

    // Should return a response entity with status code 401 and the error message
    @Test
    public void testLoginFailWrongPassword() {
        // Arrange
        String username = "testuser";
        String password = "testpassword";

        // Mock the UserService.login method to return null, indicating wrong credentials
        when(uService.login(username, password)).thenReturn(null);

        // Create the request body
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("username", username);
        requestBody.put("password", password);

        // Act
        ResponseEntity<String> response = userController.login(requestBody);

        // Assert
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertEquals("Wrong username or password", response.getBody());
    }

    // Should return a response entity with status code 401 and the error message
    @Test
    public void testLoginFailNoUsername() {
        // Arrange
        String password = "testpassword";

        // Create the request body with missing username field
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("password", password);

        // Act
        ResponseEntity<String> response = userController.login(requestBody);

        // Assert
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertEquals("Wrong username or password", response.getBody());
    }

    // Should return a response entity with status code 401 and the error message
    @Test
    public void testLoginFailNoPassword() {
        // Arrange
        String username = "testuser";

        // Create the request body with missing password field
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("username", username);

        // Act
        ResponseEntity<String> response = userController.login(requestBody);

        // Assert
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertEquals("Wrong username or password", response.getBody());
    }

    // Should return a response entity with status code 401 and the error message
    @Test
    public void testLoginFailNoUsernameAndPassword() {
        // Create an empty request body
        Map<String, String> requestBody = new HashMap<>();

        // Act
        ResponseEntity<String> response = userController.login(requestBody);

        // Assert
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        assertEquals("Wrong username or password", response.getBody());
    }
}
