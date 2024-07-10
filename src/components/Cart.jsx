import React from 'react'
import Footer from './Footer'
import './Cart.css'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import Shop from './Shop'


function Cart() {
  return (
    <>
     <div className="container-box1">
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
    
    </div>

    <div className='total'>
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
    </div>
      
      <Footer/>
    </>
  )
}

export default Cart
