import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './components/product';
const url = 'https://fakestoreapi.com';
function App() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredPros, setFiltersPros] = useState([]);
  useEffect(() => {
    fetch(`${url}/products`).then(res => res.json()).then(json => setProducts(json));
    fetch(`${url}/products/categories`).then(res => res.json()).then(json => { setCategories(json) });
  }, [])
  useEffect(() => {
    setFiltersPros(products);
  }, [products])
  const onCategory = (category) => {
    const filtered = products.filter(d => d.category === category);
    setFiltersPros(filtered);
  }
  return (
    <div className="App">
      <div className='categories'>
        {categories.map((d, i) => {
          return <button onClick={() => onCategory(d)} className='category' key={i}>{d}</button>
        })}
      </div>
      <div className='container-products'>
        {filteredPros.map((d, i) => {
          return <Product key={i} {...d} />
        })}
      </div>
    </div>
  );
}

export default App;
