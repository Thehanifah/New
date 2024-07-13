import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import './Cart.css';
import { CartContext } from './Cartcontext.jsx'; // Import CartContext
import { FaCartShopping } from "react-icons/fa6";
// import CartProvider from './Cartcontext.jsx';
// import image1 from '../images/1.jpg';
// import image2 from '../images/2.jpg';
// import image3 from '../images/3.jpg';
// import { GoPlus } from "react-icons/go";
// import { HiOutlineMinus } from "react-icons/hi2";

const Cart = () => {
  const { cart, addToCart } = useContext(CartContext); // Access cart state and addToCart function
  const [cartDetails, setCartDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        if (cart.length === 0) {
          setCartDetails([]);
          setLoading(false);
          return;
        }

        setLoading(true);

        const productIds = cart.map(item => item.id);
        const responses = await Promise.all(productIds.map(id => axios.get(`https://fakestoreapi.com/products/${id}`)));
        const products = responses.map(response => response.data);

        const cartItems = cart.map(item => {
          const product = products.find(p => p.id === item.id);
          return { ...product, quantity: item.quantity };
        });

        setCartDetails(cartItems);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart details:', error);
        setLoading(false);
      }
    };

    // Fetch cart details whenever cart changes
    fetchCartDetails();
  }, [cart]);

  return (
    <>
      <div className="cart-cont">
      <FaCartShopping className='emptycartlogo'/>
          {cartDetails.length === 0 ? (
          
          <p className='emptycart'>Your cart is empty.</p>
          
        ) : (
          <ul className="cart-items">
            {cartDetails.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
   




     {/* <div className="container-box1">
        <div className="cart-cont">
            <div className='products1'>
                <div className='product-info'>
                    <div className='imgdiv'><img src={image1} alt="" className='image-p' /></div>
                    <div className='the-info'>
                    <h5 className="card-title-cart">Mens Casual </h5>
                    <div className='prices'>
                    <p className="card-text-cart">$22.3</p>
                    <p className="card-title-cart1">Premium Slim Fit T-Shirts</p>
                    </div>
                   
                    </div>
                </div>
                <div className='control'>
                  <div className='plus-minus'>
                  <GoPlus className='plus' />
                  <p className="number">1</p>
                  <HiOutlineMinus className='minus' />
                  </div>
                </div>
            </div>
         </div>     
         <div className="cart-cont">
            <div className='products1'>
                <div className='product-info'>
                    <div className='imgdiv'><img src={image3} alt="" className='image-p' /></div>
                    <div className='the-info'>
                    <h5 className="card-title-cart">Mens Jacket </h5>
                    <div className='prices'>
                    <p className="card-text-cart">$55.99</p>
                    <p className="card-title-cart1">Premium Slim Fit T-Shirts</p>
                    </div>
                   
                    </div>
                </div>
                <div className='control'>
                  <div className='plus-minus'>
                  <GoPlus className='plus' />
                  <p className="number">1</p>
                  <HiOutlineMinus className='minus' />
                  </div>
                </div>
            </div>
         </div>     
         <div className="cart-cont">
            <div className='products1'>
                <div className='product-info'>
                    <div className='imgdiv'><img src={image2} alt="" className='image-p' /></div>
                    <div className='the-info'>
                    <h5 className="card-title-cart">Fjallraven </h5>
                    <div className='prices'>
                    <p className="card-text-cart">$109.95</p>
                    <p className="card-title-cart1">Foldsack No. 1 Backpack, Fits 15 </p>
                    </div>
                   
                    </div>
                </div>
                <div className='control'>
                  <div className='plus-minus'>
                  <GoPlus className='plus' />
                  <p className="number">1</p>
                  <HiOutlineMinus className='minus' />
                  </div>
                </div>
            </div>
            <div className='btn-shop'><button className='Shop-again'><a href="/Shop">Continue Shopping</a></button> </div> 
         </div>   
    
    </div> */}

    {/* <div className='total'>
      <p className='p1'>
       Sub Total
      </p>
    <p className='p2'>
     $188.24
    </p>
    </div>
    <div className='total'>
      <p className='p1'>
       Estimated Tax
      </p>
    <p className='p2'>
    7%
    </p>
    </div>
    <div className='total'>
      <p className='p1'>
       Total
      </p>
    <p className='p2'>
     $201.41
    </p>
    </div>

    <div className='checkout-div'>
    <button className='checkout'>Checkout</button>
    </div> */}
      
      <Footer/>
    </>
  )
}

export default Cart
