import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './cartItem.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    removeButton: {
        border: 'none',
        background: 'transparent',
        textDecoration: 'underline',
        color: '#6e6e6e',
        padding: '0px',
        '&:hover': {
            background: 'transparent',
            textDecoration: 'underline',
        },
    }
}));

export default function CartItem() {

    const classes = useStyles();
    const [size, setSize] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);

    function decrement() {
        if(quantity > 1) setQuantity(quantity-1);
    }
    
    function increment() {
        if(quantity < 5) setQuantity(quantity+1);
    }

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <div className={"itemContainer"}>
            <h1>Cart</h1>
            <div style={{display: 'flex'}}>
                <div className={"content"} style={{ display: "flex" }}>
                    <img src="/assets/cartImage.png" className={"cartImage"} width="150" height="200px" />
                    <div style={{ marginLeft: 25 }}>
                        <div style={{ fontSize: 23 }}>Relaxing Scent</div>
                        <div style={{ display: "flex", marginTop: 25 }}>
                            <div style={{ marginTop: "auto", marginBottom: "auto", marginRight: 20, fontSize: 12 }}>SIZE -</div>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={size}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>10 mL</em>
                                    </MenuItem>
                                    <MenuItem value={10}>10 mL</MenuItem>
                                    <MenuItem value={20}>20 mL</MenuItem>
                                    <MenuItem value={30}>30 mL</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ display: "flex", marginTop: 25 }}>
                            <div style={{ marginTop: "auto", marginBottom: "auto", marginRight: 20, fontSize: 12 }}>QUANTITY -</div>
                            <div class="stepper-input">
                                <button className={"btn btn-left"} onClick={decrement}>-</button>
                                <input type="text" placeholder="Number of bugs" value={quantity} className={"input-box"} disabled/>
                                <button className={"btn btn-right"} onClick={increment}>+</button>
                            </div>
                        </div>
                        <Button className={classes.removeButton} style={{marginTop: 40, marginRight: 20, fontSize: 12}}>Move to favourites</Button>
                        <Button className={classes.removeButton} style={{marginTop: 40, fontSize: 12}}>Remove</Button>
                    </div>
                </div>
                <div className={"price"} style={{fontSize: 17, fontWeight: 'bold'}}>
                    &#8377; 1299.00
                </div>
            </div>
            <hr style={{ marginTop: 25, size: 0.5 }}></hr>
        </div>
    );
}