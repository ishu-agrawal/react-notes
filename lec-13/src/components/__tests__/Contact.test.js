import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("Contact Us Page Test case", () => {
    test("should load contact us componenet", () => {
        render(<Contact />);
        
        const heading = screen.getByRole("heading");
    
        // assertion
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button inside contact component", () => {
        render(<Contact />);
        // const button = screen.getByRole('button');
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    })
    
    test("should load input name inside contact component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText('name');
        expect(inputName).toBeInTheDocument();
    })
    
    test('should load 2 input boxes on the contact component', () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    })
})