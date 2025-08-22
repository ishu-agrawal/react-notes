/*

<div id='parent'>
    <div id='child_1'>
        <h1> Hello from child 1 </h1>
    </div>
    <div id='child_2'>
        <h1> Hello from child 2 </h1>
    </div>
</div>

*/

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