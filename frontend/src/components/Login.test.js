import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

jest.mock('axios');

describe('Login component', () => {
  beforeEach(() => {
    localStorage.clear();
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

//   it('should perform a successful login', async () => {
//     const loginResponse = {
//       data: 'token',
//     };
//     axios.post.mockResolvedValue(loginResponse);
//     const { getByPlaceholderText, getByText } = render(
//         <BrowserRouter>
//             <Login />
//         </BrowserRouter>
//     );
//     const usernameInput = getByPlaceholderText('Enter username');
//     const passwordInput = getByPlaceholderText('Enter password');
//     const loginButton = getByText('Login');

//     fireEvent.change(usernameInput, { target: { value: 'user' } });
//     fireEvent.change(passwordInput, { target: { value: 'password' } });
//     fireEvent.click(loginButton);

//     await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
//     expect(axios.post).toHaveBeenCalledWith('http://localhost:8090/login', { username: 'user', password: 'password' });

//     await waitFor(() => expect(localStorage.getItem('token')).toBe('token'));
//     expect(localStorage.getItem('username')).toBe('user');

//   });
});
