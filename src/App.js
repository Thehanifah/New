import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import axios from 'axios';
import Shop from './components/Shop';
import Navbar from './components/Navbar files/Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filtered products with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    setIsSearching(query.trim() !== "");
    if (!query) {
      setFilteredProducts(products); // Show all products if query is empty
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  
  return (
    <Router>
      <div className="App">
        <Navbar onSearchStateChange={setIsSearching} onSearch={handleSearch} />
        <Routes>
          <Route exact path="/" element={<Homepage products={filteredProducts} isSearching={isSearching} />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Homepage from './components/Homepage';
// import Shop from './components/Shop'; // Import the Shop component

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Homepage />} />
//           <Route path="/shop" element={<Shop />} /> {/* Add this route for the shop */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





