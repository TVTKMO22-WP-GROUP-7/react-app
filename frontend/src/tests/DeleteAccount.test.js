import DeleteAccount from "../components/DeleteAccount";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "@testing-library/react";

describe('DeleteAccount component', () => {
    beforeEach(() => {
        localStorage.clear();
        jest.mock('axios');
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

    //Ei toimi oikein
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


        await act(async () => {
            fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
            fireEvent.click(submitButton);
            await waitFor(() => expect(axios.delete).toHaveBeenCalledTimes(1));
        });
    })

    // it("Should be a failed deletion", async () => {
    //     const loginResponse = {
    //         data: 'testpassword',
    //         };
    //         axios.post.mockResolvedValue(loginResponse);
    //         const { getByPlaceholderText, getByText } = render(
    //             <BrowserRouter>
    //                 <DeleteAccount />
    //             </BrowserRouter>
    //         );

    //     const passwordInput = getByPlaceholderText("Enter your password");
    //     const submitButton = getByText("Delete account");

    //     await act(async () => {
    //         fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    //         fireEvent.click(submitButton);
            
    //         await waitFor(() => expect(axios.delete).toHaveBeenCalledTimes(0));
    //     });
    //})
});
