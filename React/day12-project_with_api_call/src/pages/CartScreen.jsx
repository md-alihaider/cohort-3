import React from 'react'
import Cart from '../components/Cart'

const CartScreen = ({ cartItems }) => {
  return (
    <div >
      {cartItems.map((elem) => {
        return <Cart key={elem.id} product={elem} />
      })}
    </div>
  );
};

export default CartScreen