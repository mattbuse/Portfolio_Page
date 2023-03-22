import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../products';
import { ShopContext } from './shop-context';
import { CartItem } from './cart-item';
import './cart.css';

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalCartAmount = getTotalCartAmount();
    const Navigate = useNavigate()

        return (
        <div className="cart">
            <div>
                <h1> Your Cart Items</h1>
            </div>
            <div className="cart-items">
                {PRODUCTS.map((product)  => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                 })}
            </div>
                { totalCartAmount > 0 ? 
                    <div className="checkout">
                        <p className="subtotal"> Subtotal: ${totalCartAmount}</p>
                        <button onClick={() => Navigate("/")}> Continue Shopping </button>
                        <button> Checkout </button>
                    </div>
                : (
                    <h1 className="empty"> Your Cart is Empty</h1>
                )}
            </div>
        );
};
 