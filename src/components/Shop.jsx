import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './Productcards';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState('all');
    const productsPerPage = 9;
  
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
  
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <>
        <div className="container-box">
          <div className="category-links">
            <button
              className={`category-btns mx-2 ${category === 'all' ? 'active' : ''}`}
              onClick={() => setCategory('all')}
            >
              All
            </button>
            <button
              className={`category-btns mx-2 ${category === 'men\'s clothing' ? 'active' : ''}`}
              onClick={() => setCategory('men\'s clothing')}
            >
              Men
            </button>
            <button
              className={`category-btns mx-2 ${category === 'women\'s clothing' ? 'active' : ''}`}
              onClick={() => setCategory('women\'s clothing')}
            >
              Women
            </button>
            <button
              className={`category-btns mx-2 ${category === 'jewelery' ? 'active' : ''}`}
              onClick={() => setCategory('jewelery')}
            >
              Jewelries
            </button>
          </div>
          <div className="grid-container">
            {currentProducts.map(product => (
              <div className="grid-item" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center mt-4">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage - 1)}><FaArrowLeft className='arrow ' id='arrow2' />Previous</button>
              </li>
              {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
                <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => paginate(number + 1)}>{number + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next <FaArrowRight className='arrow' id='arrow1' /></button>
              </li>
            </ul>
          </nav>
        </div>
        <Footer />
      </>
    );
  };

  export default Shop;


// import Footer from "./Footer";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from './Productcards';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import './Shop.css'


// const Shop = () => {
//     const [products, setProducts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [category, setCategory] = useState('all');
//     const productsPerPage = 9;
  
//     useEffect(() => {
//       const fetchProducts = async () => {
//         try {
//           const response = await axios.get('https://fakestoreapi.com/products');
//           setProducts(response.data);
//         } catch (error) {
//           console.error('Error fetching products:', error);
//         }
//       };
  
//       fetchProducts();
//     }, []);
  
//     const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
  
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
//     return (
//       <>
//             <div className="container-box">
//           <div className="category-links">
//             <button className=" category-btns mx-2" onClick={() => setCategory('all')}>All</button>
//             <button className=" category-btns mx-2" onClick={() => setCategory('men\'s clothing')}>Men</button>
//             <button className=" category-btns mx-2" onClick={() => setCategory('women\'s clothing')}>Women</button>
//             <button className=" category-btns mx-2" onClick={() => setCategory('jewelery')}>Jewelries</button>
//           </div>
//           <div className="grid-container">
//             {currentProducts.map(product => (
//               <div className="grid-item" key={product.id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//           <nav aria-label="Page navigation">
//             <ul className="pagination justify-content-center mt-4">
//               <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                 <button className="page-link" onClick={() => paginate(currentPage - 1)}><FaArrowLeft className='arrow ' id='arrow2' />Previous</button>
//               </li>
//               {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
//                 <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
//                   <button className="page-link" onClick={() => paginate(number + 1)}>{number + 1}</button>
//                 </li>
//               ))}
//               <li className={`page-item ${currentPage === Math.ceil(filteredProducts.length / productsPerPage) ? 'disabled' : ''}`}>
//                 <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next <FaArrowRight className='arrow' id='arrow1' /></button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <Footer />
//       </>
//     );
//   };

//   export default Shop;