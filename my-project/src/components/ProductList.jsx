import React from 'react';
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response1 = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
          const response2 = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
          const data1 = await response1.json();
          const data2 = await response2.json();
          setProducts([...data1, ...data2]); // Combine both datasets
        };
        fetchData();
      }, []);
        

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 justify-center items-center text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Contoh item produk */}
        {products.map(prod => (
        <div className="bg-white shadow-md rounded-lg p-4">
            <Link to={`/DetailProduk`} state={{product:prod}}>
            <div className=" w-[10em] h-[15em]">
                <img src={prod?.image} />
            </div>
            <div className="font-bold text-xl w-100 p-2">
                <h1 > {prod?.title}</h1>
            </div>
            <div className="p-2">
                <p>Kategori</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail Product</button>
            </Link>
        </div>
    ))}
      </div>
      
    </div>
  );
}

export default ProductList;