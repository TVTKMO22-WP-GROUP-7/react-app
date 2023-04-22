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

//@RunWith(MockitoJUnitRunner.class)
public class DeleteTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService uService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    // Should return a response entity with status code 200 and the username
    @Test
    public void testDeleteAccountSuccess() {
        // Arrange
        Map<String, String> request = new HashMap<>();
        request.put("username", "testuser1");
        request.put("password", "testpassword");

        // Mock the UserService
        Users mockUser = new Users();
        when(uService.deleteAccount("testuser1", "testpassword")).thenReturn(mockUser);

        // Act
        ResponseEntity<String> response = userController.deleteAccount(request);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Account deleted", response.getBody());
    }

    //Should return a response entity with status code 403 and the error message
    @Test
    public void testDeleteAccountFailNoUsernameAndPassword() {
        // Arrange
        Map<String, String> request = new HashMap<>();

        // Act
        ResponseEntity<String> response = userController.deleteAccount(request);

        // Assert
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
        assertEquals("Username and password are required", response.getBody());
    }

    //Should return a response entity with status code 403 and the error message
    @Test
    public void testDeleteAccountFailWrongUsernameOrPassword() {
        // Arrange
        Map<String, String> request = new HashMap<>();
        request.put("username", "wronguser");
        request.put("password", "wrongpassword");

        // Mock the UserService
        when(uService.deleteAccount("wronguser", "wrongpassword")).thenReturn(null);

        // Act
        ResponseEntity<String> response = userController.deleteAccount(request);

        // Assert
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
        assertEquals("Check that you've written right username or password", response.getBody());
    }

    //Should return a response entity with status code 403 and the error message
    @Test
    public void testDeleteAccountFailNoUsername() {
        // Arrange
        Map<String, String> request = new HashMap<>();
        request.put("password", "testpassword");

        // Act
        ResponseEntity<String> response = userController.deleteAccount(request);

        // Assert
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
        assertEquals("Username and password are required", response.getBody());
    }

    //Should return a response entity with status code 403 and the error message
    @Test
    public void testDeleteAccountFailNoPassword() {
        // Arrange
        Map<String, String> request = new HashMap<>();
        request.put("username", "testuser");

        // Act
        ResponseEntity<String> response = userController.deleteAccount(request);

        // Assert
        assertEquals(HttpStatus.FORBIDDEN, response.getStatusCode());
        assertEquals("Username and password are required", response.getBody());
    }
    
}
