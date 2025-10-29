import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

// react element
const heading = React.createElement('h1', {id: "heading"}, "element using createElement");

// using JSX
const jsxHeading = <h1>Element using JSX</h1> // single line
// multiple line -> use ()
const multipleLineJSX = ( 
    <h1 className='head'>
        Multiple line element using JSX
    </h1>
);

// react component
// class components - OLD
// functional components - NEW

// Functional Component - starts with capital letter
const HeadingComponent = () => {
    return <h1> React functional component</h1>;
}

const Fn = () => true;
const HeadingComponent2 = () => (
    <div id="container">
        <HeadingComponent />
        {multipleLineJSX}
        <h1>React functional component 2</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

root.render(<HeadingComponent2 />)

// use below syntax to render multiple elements, components at the same time
// root.render(
//   <>
//     {heading}
//     {jsxHeading}
//   </>
// );

