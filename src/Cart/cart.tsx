import React from 'react'
import { CartItemType } from '../COMPONENTS/product'
import {useState} from 'react'
import {useEffect} from 'react'
import '../Cart/cart.css'
import { Link } from 'react-router-dom'




const Cart:React.FC= () => {
  const [productInCart,setProductInCart] = useState<CartItemType[]>([])
  const [itemNumber] = useState(1)
  const [Total, setTotal] = useState<number>(0);

  const GetCart = () => {
    const item: any = localStorage.getItem("CartItemType");
    setProductInCart(JSON.parse(item));
  };
  console.log(productInCart);

  useEffect(() => {
    GetCart();
  }, []);
  
  const removeItemInCart = (ItemId: number) => {
    const item: any = localStorage.getItem("CartItemType");
    let ProductList: any = [];
ProductList = JSON.parse(item);

let productRemaining = [];
if(ProductList !==null){
  productRemaining = ProductList.filter((item: CartItemType) => item.id !== ItemId);
  localStorage.setItem("CartItemType", JSON.stringify(productRemaining));
  GetCart();
}
  };
  const incrementProducts = (ItemId: number) => {
    const item: any = localStorage.getItem("CartItemType");
    let ProductList: any = [];

    ProductList = JSON.parse(item);
    let getNewList: any = [];
    if(ProductList !== null){
      for (let item of ProductList){
        if(item.id === ItemId)
        {
        let currentCount = item?.count || 1;
        item.count = Number(currentCount) + 1;
      }
      getNewList.push(item);
      }
      localStorage.setItem("CartItemType", JSON.stringify(getNewList));
      GetCart();
    }
  }
  const decrementProduct = (ItemId: number) => {
    const item: any = localStorage.getItem("CartItemType");
    let ProductList: any = [];

    ProductList = JSON.parse(item);
    let getNewList: any = [];
    if(ProductList !== null){
      for (let item of ProductList){
        if(item.id === ItemId)
        {
        let currentCount = item?.count || 1;
        if(currentCount === 1){
removeItemInCart(ItemId);
return;
        }
        item.count = Number(currentCount) -1;
      }
      getNewList.push(item);
      }
      localStorage.setItem("CartItemType", JSON.stringify(getNewList));
      GetCart();
    }
  }

  useEffect(() =>{
  const calculatedTotal = 
    productInCart.reduce((ack, item) => ack + (item.count || 1 )* item.price, 0);
    setTotal(calculatedTotal);
  },
    [productInCart])

    
  // const totalPrice =0;
  return (
    <div className='display-container1'>
    <div className='displayInCart'>
      <div className='myCart'>
    <h1>MY CART</h1>
    </div>
      {
       productInCart.map((detail) =>(
          <div className='display-container' key={detail.id}>
<div className='cart-content1'>
  <img src={detail.image} 
  alt='product'
  
  />
</div>
<div className='cart-content2'>
<h1>{detail.title}</h1>
<h1><span>${detail.price}</span></h1>
<select>
  <option>size</option>
  <option>S</option>
  <option>M</option>
  <option>XL</option>
</select>
<select>
  <option>Color</option>
  <option>Red</option>
  <option>Blue</option>
  <option>Black</option>
</select>
<button className='minus-quantity' 
type="button" 
value="-"
onClick={() => decrementProduct(detail.id)}>-</button>

  <input type='text' 
name='quantity' min="0"
className='quantity-control'
value={detail?.count || itemNumber}/>

<button className='plus-quantity' 
type="button" 
value="+"
onClick={() =>incrementProducts(detail.id)}>+</button>
<button onClick={() => removeItemInCart(detail.id)}>Delete</button>
<h1>Amount:<span>${(detail?.count || 1) * detail?.price}</span></h1>
</div>

          </div>
        ))
      }
      </div>
      <div className='delivery-details'>
      <h3>Delivery</h3>
      <button>Express</button><br></br>
      {/* <h2>Delivery Date:04 July,2023 </h2> */}
      {/* <input type='text' placeholder='Promocode'/><input type='submit' value='Apply'/><br></br> */}
      <h1>SubTotal:$<span>{Total.toFixed(2)}</span></h1>
      <input type='submit' value='proceed to checkout' className='checkout'/><br></br>
    <Link to="/">  <input type='submit' value='Continue Shopping' className='continue-shopping'/></Link>
      </div>
   
    </div>
  )
}

export default Cart;
