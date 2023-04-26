import Login from '../components/Login';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import Constants from '../components/Constants.json';
import axios from 'axios';


describe('Login component', () => {
    beforeEach(() => {
        localStorage.clear();
        jest.mock('axios');
        axios.get = jest.fn().mockResolvedValue({ data: '' });
        axios.post = jest.fn().mockResolvedValue('');
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("Should render Login component correctly", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    const registerTitle = screen.getByText("Login to private page");
    const usernameInput = screen.getByPlaceholderText("Enter username");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    const submitButton = screen.getByRole("button", { name: "Login" });
    const loginLink = screen.getByRole("link", { name: "Register here" });
    
    expect(registerTitle).toBeInTheDocument(); 
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    })

  it('should perform a successful login', async () => {
    const loginResponse = {
      data: 'token',
    };
    axios.post.mockResolvedValue(loginResponse);
    const { getByPlaceholderText, getByText } = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const usernameInput = getByPlaceholderText('Enter username');
    const passwordInput = getByPlaceholderText('Enter password');
    const loginButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(axios.post).toHaveBeenCalledWith(Constants.API_ADDRESS + '/login', { username: 'testuser', password: 'testpassword' });

    await waitFor(() => expect(localStorage.getItem('token')).toBe('token'));
    expect(localStorage.getItem('username')).toBe('testuser');
  });

  it('attempt to submit with no username', async () => {
    const loginResponse = {
      data: 'token',
    };
    axios.post.mockResolvedValue(loginResponse);
    const { getByPlaceholderText, getByText } = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const usernameInput = getByPlaceholderText('Enter username');
    const passwordInput = getByPlaceholderText('Enter password');
    const loginButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(0));
    expect(localStorage.getItem('token')).toBe(null);
    expect(localStorage.getItem('username')).toBe(null);
  });


  it('attempt to submit with no password', async () => {
    const loginResponse = {
      data: 'token',
    };
    axios.post.mockResolvedValue(loginResponse);
    const { getByPlaceholderText, getByText } = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    const usernameInput = getByPlaceholderText('Enter username');
    const passwordInput = getByPlaceholderText('Enter password');
    const loginButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(0));
    expect(localStorage.getItem('username')).toBe(null);
    expect(localStorage.getItem('token')).toBe(null);
  });
});
