import React, { useContext } from 'react';
import './Productcard.css';
import { CartContext } from './Cartcontext.jsx';
import { useState } from 'react';

const ProductCards = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000); 
  };

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button className='checkout' onClick={handleAddToCart}>Add to cart</button>
       </div>
       {showPopup && <div className="popup">Product added to cart</div>}
    </div>
    
  );
};

export default ProductCards;


// import React from 'react';
// import './Productcard.css';

// const ProductCards = ({ product }) => {
//   return (
//     <div className="card">
//       <img src={product.image} className="card-img-top" alt={product.title} />
//       <div className="card-body">
//         <h5 className="card-title">{product.title}</h5>
//         <p className="card-text">${product.price}</p>
//         <button><a href="">Add to cart</a></button>
//       </div>
//     </div>
//   );
// };

// export default ProductCards;
