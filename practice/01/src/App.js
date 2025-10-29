// import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import React, { Suspense, useState, useEffect } from 'react';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import Cart from './components/Cart';
import { CartProvider } from './utils/CartContext';

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Utkarsh Agrawal",
        }
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <CartProvider>
            <div className='app'>
                <Header />
                <Outlet />
            </div>
            </CartProvider>
        </ UserContext.Provider>
    )
}

const Grocery = React.lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/grocery',
                element: 
                    <Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <ErrorPage />,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)