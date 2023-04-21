import DeleteAccount from "./DeleteAccount";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";


describe('DeleteAccount component', () => {
    afterEach(cleanup);

    test("Should render DeleteAccount component correctly", () => {
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
});
