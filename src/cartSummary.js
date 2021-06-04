import React from 'react';
import ReactDOM from 'react-dom';
import './cartSummary.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    checkoutButton: {
        backgroundColor: 'black',
        marginTop: '20px',
        height: '60px',
        width: '100%',
        color: 'white',
        '&:hover': {
            backgroundColor: 'black',
        },
    }
}));

export default function CartSummary() {
    const classes = useStyles();
    return(
        <div className={"summaryContainer"}>
            <h1>Summary</h1>
            <div style={{display: "flex"}}>
                <div className={'amountType'}>Subtotal - </div>
                <div className={'amount'}>&#8377; 1300.00</div>
            </div>
            <div style={{display: "flex", marginTop: 25, marginBottom: 25}}>
                <div className={'amountType'}>Tax - </div>
                <div className={'amount'}>&#8377; 120.00</div>
            </div>
            <div style={{display: "flex", marginTop: 25, marginBottom: 25}}>
                <div className={'amountType'}>Estimated delivery and handeling - </div>
                <div className={'amount'}>&#8377; 100.00</div>
            </div>
            <div style={{display: "flex", marginTop: 25, marginBottom: 25}}>
                <div className={'amountType'}>Discount - </div>
                <div className={'amount'}>&#8377; 200.00</div>
            </div>
            <hr></hr>
            <div style={{display: "flex", marginTop: 25, marginBottom: 25, fontWeight: 'bold'}}>
                <div className={'amountType'}>TOTAL</div>
                <div className={'amount'}>&#8377; 1320.00</div>
            </div>
            <hr></hr>
            <Button className={classes.checkoutButton} variant="contained">Proceed to Checkout</Button>
        </div>
    );
}