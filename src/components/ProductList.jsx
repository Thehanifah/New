
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './Productcards';
import './Productlists.css'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12; // Number of products per page
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1); // Reset to first page when products change
      }, [products]);
  
    return (
      <div className="container-box">
        <div className="grid-container">
          {currentProducts.map(product => (
            <div className="grid-item" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <nav aria-label="...">
          <ul className="pagination justify-content-center mt-4">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage - 1)}><FaArrowLeft className='arrow ' id='arrow2'/>Previous</button>
            </li>
            {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
              <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => paginate(number + 1)}>{number + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(products.length / productsPerPage) ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next <FaArrowRight className='arrow' id='arrow1' /></button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default ProductList;

// Create category page
// ?add functionality for shopping
// checkout page
// Responsivness
