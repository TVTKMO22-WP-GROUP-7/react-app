import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axios from 'axios';

jest.mock('axios');

describe('Register component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("Should render Register component correctly", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    
    const registerTitle = screen.getByText("Register new user");
    const usernameInput = screen.getByPlaceholderText("Enter username");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    const confirmPasswordInput = screen.getByPlaceholderText("Enter confirm password");
    const submitButton = screen.getByRole("button", { name: "Register" });
    const loginLink = screen.getByRole("link", { name: "Log in here" });
    
    expect(registerTitle).toBeInTheDocument(); 
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  })

  // it('successful registration', async () => {
  //   render(
  //   <BrowserRouter>
  //     <Register />
  //   </BrowserRouter>
  //   );
  
  //   // Act
  //   const usernameInput = screen.getByPlaceholderText("Enter username");
  //   const passwordInput = screen.getByPlaceholderText("Enter password");
  //   const confirmPasswordInput = screen.getByPlaceholderText("Enter confirm password");
  //   const submitButton = screen.getByText("Register");
  
  //   fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  //   fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  //   fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
  //   fireEvent.click(submitButton);
  
  //   // Assert 
  //   const element = screen.getByText("Registration successful!", { exact: false });
  //   await waitFor(() => {
  //     expect(element).toBeDefined();
  //   });    
  // });
});


