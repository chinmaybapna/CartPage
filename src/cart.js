import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './cartItem';
import CartSummary from './cartSummary';
import Grid from '@material-ui/core/Grid';
import './cart.css';

export default function Cart() {
    return (
        <div className={"container"} style={{marginTop: 100}}>
            <div style={{display: "flex"}}>
                <CartItem />
                <CartSummary />
            </div>
        </div>
    );
}