import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import '../COMPONENTS/product.css'
// import Cart from '../Cart/cart';
import CartItem from '../CartItem/cartItem';


export interface CartItemType  {
    id: number;
    category: string;
    description: string;
    image: string;
    title: string;
    price: number;
    count: number;
    toFixed:number;
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

const handleAddToCart =(CartItemType:CartItemType) => {
  const item: any = localStorage.getItem("CartItemType");
  let ProductList : any =[];
  console.log(JSON.parse(item));
  ProductList = JSON.parse(item);
  if(ProductList === null) {
    ProductList = [];
    ProductList.push(CartItemType);
  }
  else
  {
    let checkFoDuplicate = ProductList.filter(
      (item: CartItemType) => item.id === CartItemType.id
    );
    console.log(checkFoDuplicate);
    if (checkFoDuplicate.length < 1) {
      ProductList.push(CartItemType);
    }
  }
  console.log(ProductList,CartItemType)
  localStorage.setItem("CartItemType", JSON.stringify(ProductList))
}
 
return (
    <div className='container'>
      <div className='heading-product'>
      <h1>ALL PRODUCT IN STOCK</h1></div>
   <Link to='/cart'><button>View Cart</button></Link>
    <div className='product-container'>
        
      {datas.map((detail) =>(
        <div className='product-details'key={detail.id}>
            <img src ={detail.image} 
            alt='product'
            onClick={() => handleAddToCart(detail)}/>
            <h1>{detail.title}</h1>
            <h2>{detail.category}</h2>
            <p>{detail.description}</p>
            <h1><span>${detail.price}</span></h1>
            
        </div>
      )
    
    )}
    </div>
    </div>
  )
}

export default Product;
