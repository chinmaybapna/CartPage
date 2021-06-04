import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cartItem';
import CartSummary from './cartSummary';
import Grid from '@material-ui/core/Grid';
import './cart.css';

export default function Cart() {
    return (
        <div className={"container"} style={{marginTop: 100}}>
            <div className={"responsive"}>
                <div className={"cartItems"} style={{display: "inline-block"}}>
                    <h1>Cart</h1>
                    <CartItem />
                    {/* <CartItem /> */}
                </div>
                <CartSummary />
            </div>
        </div>
    );
}