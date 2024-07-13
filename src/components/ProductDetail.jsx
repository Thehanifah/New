import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import './ProductDetail.css';
import { CartContext } from './Cartcontext'; // Import CartContext

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  const [quantity, setQuantity] = useState(1); // Initialize with 1
  const { addToCart } = useContext(CartContext); // Use CartContext

  const getStockStatus = (quantity) => {
    return quantity > 0 ? "In Stock" : "Not In Stock";
  };

  const increaseQuantity = () => {
    if (quantity < product.Qty) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className='Productdesc'>
        <div className='image-detail'>
          <img className='productview' src={product.photoUrl} alt={product.name} />
        </div>
        <div className='details'>
          <h1 className='Productname'>{product.name}</h1>
          <p>Price: ${product.current_price}</p>
          <p>{product.description}</p>
          <p>Availability: {getStockStatus(product.Qty)}</p>
          
          <div className='quantity-selector'>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>

          <button 
            className='add-to-cart' 
            onClick={handleAddToCart}
            disabled={product.Qty === 0} // Disable the button when qty is 0
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
