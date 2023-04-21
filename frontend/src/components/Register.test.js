import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";


describe('Register component', () => {
  afterEach(cleanup);

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

  // it("Should register new user", async () => {
  //   render(
  //     <BrowserRouter>
  //       <Register />
  //     </BrowserRouter>
  //   );

  //   const usernameInput = screen.getByPlaceholderText("Enter username");
  //   const passwordInput = screen.getByPlaceholderText("Enter password");
  //   const confirmPasswordInput = screen.getByPlaceholderText("Enter confirm password");
  //   const submitButton = screen.getByRole("button", { name: "Register" });
    
  //   fireEvent.change(usernameInput, "user");
  //   fireEvent.change(passwordInput, "password");
  //   fireEvent.change(confirmPasswordInput, "password");

  //   await act(async () => {
  //     fireEvent.click(submitButton);
  //   }
  //   );

  //   expect(usernameInput).toHaveValue("user");
  //   expect(passwordInput).toHaveValue("password");
  //   expect(confirmPasswordInput).toHaveValue("password");
  // })


});


