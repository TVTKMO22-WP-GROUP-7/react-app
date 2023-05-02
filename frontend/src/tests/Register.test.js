import Register from "../components/Register";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import Constants from '../components/Constants.json';
import axios from 'axios';

jest.mock('axios');

describe('Register component', () => {
  beforeEach(() => {
    localStorage.clear();
    axios.post = jest.fn().mockResolvedValue('');
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

  it('Should be a successful registration', async () => {
    render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
    );
  
    const usernameInput = screen.getByPlaceholderText("Enter username");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    const confirmPasswordInput = screen.getByPlaceholderText("Enter confirm password");
    const submitButton = screen.getByText("Register");
  
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);
  
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(Constants.API_ADDRESS + '/register', { username: 'testuser', password: 'testpassword' });     
  });

  it('Should be a failed registration when no username', async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
      );
    
      const usernameInput = screen.getByPlaceholderText("Enter username");
      const passwordInput = screen.getByPlaceholderText("Enter password");
      const confirmPasswordInput = screen.getByPlaceholderText("Enter confirm password");
      const submitButton = screen.getByText("Register");
    
      fireEvent.change(usernameInput, { target: { value: '' } });
      fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
      fireEvent.click(submitButton);
      
      await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(0));
      await waitFor(() => {
        expect(screen.getByText('username can not be empty')).toBeInTheDocument();
      });
    });

  it('Should be a failed registration when no password', async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
      );
      
      const usernameInput = screen.getByPlaceholderText("Enter username");
      const passwordInput = screen.getByPlaceholderText("Enter password");
      const confirmPasswordInput = screen.getByPlaceholderText("Enter confirm password");
      const submitButton = screen.getByText("Register");
      
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: '' } });
      fireEvent.change(confirmPasswordInput, { target: { value: '' } });
      fireEvent.click(submitButton);
  
      await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(0));
      await waitFor(() => {
        expect(screen.getByText('Password can not be empty')).toBeInTheDocument();
      });
  });

  it('Should be a failed registration when password not match', async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
      );
    
      const usernameInput = screen.getByPlaceholderText("Enter username");
      const passwordInput = screen.getByPlaceholderText("Enter password");
      const confirmPasswordInput = screen.getByPlaceholderText("Enter confirm password");
      const submitButton = screen.getByText("Register");
    
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'wrongpassword' } });
      fireEvent.click(submitButton);

      await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(0));
  });


});
