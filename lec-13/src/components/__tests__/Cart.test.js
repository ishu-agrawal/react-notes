import MOCK_DATA from '../mockData/mockResMenu.json'
import RestaurantMenu from '../RestaurantMenu';
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from 'react-router-dom';
import Cart from "../Cart";

globalThis.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it('should load restaurant menu component', async() => {
    await act(() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    const accordianHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordianHeader);

    const itemsInList = screen.getAllByTestId('foodItems').length;
    expect(itemsInList).toBe(20);

    const addBtns = screen.getAllByRole('button', { name : 'Add +'});
    fireEvent.click(addBtns[0]);

    let cartText = screen.getByText('Cart (1 items)');
    expect(cartText).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    fireEvent.click(addBtns[2]);

    cartText = screen.getByText('Cart (3 items)');
    expect(cartText).toBeInTheDocument();

    const itemsInCart = screen.getAllByTestId("foodItems").length;
    expect(itemsInCart).toBe(23);

    fireEvent.click(screen.getByRole('button', {name: 'Clear Cart'}));
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
    expect(screen.getByText('No items is Cart')).toBeInTheDocument();


})