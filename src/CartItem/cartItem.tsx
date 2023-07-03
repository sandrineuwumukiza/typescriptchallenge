import React from 'react'
import '../CartItem/cartItem.css'
import { CartItemType } from '../COMPONENTS/product'

type props={
    item:CartItemType;
    addToCart: (clickedItem:CartItemType) => void;
    removeFromCart:(id: number) => void;
}
const CartItem:React.FC<props> = ({item, addToCart, removeFromCart}) => {
  return (
    <div>
    <h3>{item.title}</h3>
    <div className='buttons'>
    <button
    
    >Add to</button>
       
    </div>
    <div className='clickadd'>
<img src={item.image} alt ={item.title}/>
    </div>
    </div>
  )
}

export default CartItem
