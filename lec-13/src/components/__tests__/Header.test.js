import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header", () => {
    it("should render with a login button", () => {
        render(
            // since we are react router DOM
            <BrowserRouter>
                {/* since header is wrapped in store */}
                <Provider store={appStore}> 
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const loginBtn = screen.getByRole("button");
        expect(loginBtn).toBeInTheDocument();
    });

    it("should load with 0 cart items", () => {
        render(
            // since we are react router DOM
            <BrowserRouter>
                {/* since header is wrapped in store */}
                <Provider store={appStore}> 
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const cartItems = screen.getByRole("button");
        expect(cartItems).toBeInTheDocument();
    });

    it("should change Login btn to Logout on Click", () => {
        render(
            // since we are react router DOM
            <BrowserRouter>
                {/* since header is wrapped in store */}
                <Provider store={appStore}> 
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        const loginBtn = screen.getByRole("button", {name: 'Login'});
        fireEvent.click(loginBtn);
        const logoutBtn = screen.getByRole("button", {name: 'Logout'});
        expect(logoutBtn).toBeInTheDocument();
    });
})