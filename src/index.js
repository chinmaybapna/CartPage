import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './cart'; 

const App = () => {
    return (
        <div>
            <Cart />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)