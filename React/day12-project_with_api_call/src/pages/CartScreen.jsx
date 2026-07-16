import React from 'react'
import Cart from '../components/Cart'

const CartScreen = ({ cartItems }) => {
  return (
    <div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartScreen