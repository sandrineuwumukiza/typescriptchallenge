import React from 'react'
import CartItem  from '../CartItem/cartItem'
// import '../COMPONENTS/cart.css' 
import { CartItemType } from '../COMPONENTS/product'

type props = {
  CartItems: CartItemType[];
  addToCart: (clickedItem:CartItemType ) => void;
  removeFromCart: (id: number) => void;
}
const Cart:React.FC<props> = ({CartItems,addToCart,removeFromCart}) => {
  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {CartItems.length ===0 ?<p>No Items in cart.</p> : null }
      {CartItems.map(item => (
        <CartItem
        key={item.id}
        item ={item}
        addToCart={addToCart}
        removeFromCart ={removeFromCart}
        />
      ))}
    </div>
  )
}

export default Cart;
