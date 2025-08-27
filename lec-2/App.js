import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    'div',
    {id : 'parent'},
    [
        React.createElement(
            'div',
            {id: 'child_1'},
            React.createElement('h1',{},'Hello from child 1')
        ),
        React.createElement(
            'div',
            {id: 'child_2'},
            React.createElement('h1',{},'Hello from child 2')
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);