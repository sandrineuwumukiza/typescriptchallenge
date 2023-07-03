import React from 'react';
import './App.css';
import Product from './COMPONENTS/product';
import Cart from './Cart/cart';
import {Routes,Route} from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
