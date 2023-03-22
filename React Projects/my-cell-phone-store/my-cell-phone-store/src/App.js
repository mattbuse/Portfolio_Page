import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import { Cart } from './components/cart';
import { Shop } from './components/shop';
import { ShopContextProvider } from './components/shop-context';
import './styles.css';

function App() {
  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
        <NavBar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
      </ShopContextProvider>
    </div>
      );
  }

  export default App;