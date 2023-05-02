import DeleteAccount from "../components/DeleteAccount";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";

jest.mock('axios');

describe('DeleteAccount component', () => {
    beforeEach(() => {
        localStorage.clear();
        axios.get = jest.fn().mockResolvedValue({ data: '' });
        axios.post = jest.fn().mockResolvedValue('');
        axios.delete = jest.fn(() => Promise.resolve());
    });

    afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

    it("Should render DeleteAccount component correctly", () => {
        render(
            <BrowserRouter>
                <DeleteAccount />
            </BrowserRouter>
        );

            const deleteAccountTitle = screen.getByText("Delete Account");
            const passwordInput = screen.getByPlaceholderText("Enter your password");
            const submitButton = screen.getByRole("button", { name: "Delete account" });
            const loginLink = screen.getByRole("link", { name: "Don't want to delete account?" });

            expect(deleteAccountTitle).toBeInTheDocument();
            expect(passwordInput).toBeInTheDocument();
            expect(submitButton).toBeInTheDocument();
            expect(loginLink).toBeInTheDocument();
    })

    it("Should be a successful deletion", async () => {
        const loginResponse = {
            data: 'testpassword',
          };
          axios.post.mockResolvedValue(loginResponse);
          const { getByPlaceholderText, getByText } = render(
              <BrowserRouter>
                  <DeleteAccount />
              </BrowserRouter>
          );

        const passwordInput = getByPlaceholderText("Enter your password");
        const submitButton = getByText("Delete account");
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(submitButton);
      
        await waitFor(() => expect(axios.delete).toHaveBeenCalledTimes(1));
    })

    it("Should be a failed deletion if no password is entered", async () => {
        const loginResponse = {
            data: 'testpassword',
          };
          axios.post.mockResolvedValue(loginResponse);
          render(
              <BrowserRouter>
                  <DeleteAccount />
              </BrowserRouter>
          );

        const submitButton = screen.getByText("Delete account");
        fireEvent.click(submitButton);

        await waitFor(() => expect(axios.delete).toHaveBeenCalledTimes(0));
        await waitFor(() => expect(screen.getByText('Password can not be empty')).toBeInTheDocument());
    });
})


