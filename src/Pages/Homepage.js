import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import { fetchProducts } from '../features/products/ProductSlice';
import './Homepage.css';





const Homepage = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  const [Search,SetSearch] = useState('')

  const SearchFilter = useCallback(() => {
    console.log('searching');
    if (Search) {
      return products.filter((item) =>
        item.title.toLowerCase().includes(Search.toLowerCase())
      );
    }
    return products;
  }, [Search, products]);





  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p style={{textAlign:'center',margin:'50px'}}>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading products</p>;
  }

  const filteredProducts = SearchFilter();

  return (
    <div>

      <br></br>

     
     <div style={{margin:'0 auto',position:'relative',width:'50%'}}>

   
     
     <input className="form-control" list="datalistOptions" id="Searchbar" placeholder="Search " value={Search} onChange={(e)=>SetSearch(e.target.value)} /> <i className="bi bi-search" id="SearchIcon"></i> 
     </div>
      <br></br>  <br></br> <br></br>


      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <br></br>

    </div>





  )
}

export default Homepage
