import React from 'react'
import {useState} from 'react'
import '../COMPONENTS/product.css'
import Cart from '../Cart/cart';
import CartItem from '../CartItem/cartItem';


export interface CartItemType  {
    id: number;
    category: string;
    description: string;
    image: string;
    title: string;
    price: number;
}
const Product = () => {
const [datas,setDatas]= useState<CartItemType[]>([]);
 fetch('https://fakestoreapi.com/products')
 .then((res) =>res.json())
 .then((data) =>{
    setDatas(data);
    console.log(data);
 })
 .catch((error) =>{
    console.error(error);
 });
 const [cartItems,setCartItems] = useState([] as CartItemType[]);

 
 const handleAddToCart = ( clickedItem: CartItemType) =>{
    setCartItems(prev =>{
        //1.is the item already added in the cart?
        const isItemInCart = prev.find(item => item.id === clickedItem.id)

        if(isItemInCart){
        return prev.map(item =>
            item.id ===clickedItem.id ? {...item,price:item.price + 1}
            :item
        );
        }
        // first time the item is added
        return [...prev, {...clickedItem, price: 1}];
    })
 };
 const handleRemoveFromCart = () => null;
 
return (
    
    <div className='product-container'>
         
      {datas.map((detail) =>(
        <div className='product-details'key={detail.id}>
            <img src ={detail.image}/>
            <h1>{detail.title}</h1>
            <h2>{detail.category}</h2>
            <p>{detail.description}</p>
            <h1><span>${detail.price}</span></h1>
            
        </div>
      )
    
    )}
    </div>
  )
}

export default Product;
