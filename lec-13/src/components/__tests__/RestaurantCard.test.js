import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mockData/resCardMock.json";
import '@testing-library/jest-dom'

describe("RestaurantCard", () => {
    it('should render RestaurantCArd ccomponent with props data', () => {
        render(<RestaurantCard resData={MOCK_DATA}/>);

        const name = screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();
    });

    it("should render Restaurant Card with Open Label", () => {
        
    })
})