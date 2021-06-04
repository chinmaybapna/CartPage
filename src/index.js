import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from './header';
import Footer from './footer'; 
import Cart from './cart'; 

const App = () => {
    return (
        <div>
            <ButtonAppBar />
            <Cart />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)