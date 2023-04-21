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
import com.climateapp.backend.data.Users;
import com.climateapp.backend.service.UserService;

public class RegisterTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    // Should return a response entity with status code 200 and the username
    @Test
    public void testRegisterSuccess() {
        // Arrange
        Map<String, String> request = new HashMap<>();
        request.put("username", "testuser");
        request.put("password", "testpassword");

        Users user = new Users("testuser", "passwordhash");
        when(userService.register("testuser", "testpassword")).thenReturn(user);

        // Act
        ResponseEntity<String> response = userController.register(request);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("testuser", response.getBody());
    }

    //If user already exists. Should return a response entity with status code 403 and the error message
    @Test
    public void testRegisterFailUserAlreadyExists() {
        // Arrange
        Map<String, String> request = new HashMap<>();
        request.put("username", "testuser");
        request.put("password", "testpassword");

        when(userService.register("testuser", "testpassword")).thenReturn(null);

        // Act
        ResponseEntity<String> response = userController.register(request);

        // Assert
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
        assertEquals("Username testuser already exists!", response.getBody());
    }

    //If no username is provided. Should return a response entity with status code 403 and the error message
    @Test
    public void testRegisterFailNoUsername() {
        // Arrange
        Map<String, String> request = new HashMap<>();
        request.put("password", "testpassword");

        when(userService.register("", "testpassword")).thenReturn(null);

        // Act
        ResponseEntity<String> response = userController.register(request);

        // Assert
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
        assertEquals("Username and password are required", response.getBody());
    }

    //If no password is provided. Should return a response entity with status code 403 and the error message
    @Test
    public void testRegisterFailNoPassword() {
    // Arrange
    Map<String, String> request = new HashMap<>();
    request.put("username", "testuser");

    when(userService.register("testuser", "")).thenReturn(null);

    // Act
    ResponseEntity<String> response = userController.register(request);

    // Assert
    assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
    assertEquals("Username and password are required", response.getBody());
    }

    //If no username or password is provided. Should return a response entity with status code 403 and the error message
    @Test
    public void testRegisterFailNoUsernameAndPassword() {
        // Arrange
        Map<String, String> request = new HashMap<>();

        when(userService.register("", "")).thenReturn(null);

        // Act
        ResponseEntity<String> response = userController.register(request);

        // Assert
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
        assertEquals("Username and password are required", response.getBody());
    }

}
