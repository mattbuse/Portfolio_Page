import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import { Shop } from './shop';
import { Cart } from './cart';

export default function NavBar() {
        return (
            <div className="navbar">
                <div className="links">
                    <Link to="/" className="link" element={<Shop />}> Shop </Link>
                    <Link to="/cart" element={<Cart />}><ShoppingCart size={36} /></Link>
                </div>
            </div>
        );
    }