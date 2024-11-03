import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Katalog() {
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
    <>
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center">
        <h1 className="text-2xl font-bold">Home / Katalog</h1>
      </div>
    </div>
    <div className="grid grid-cols-4 items-center justify-center h-100">
      {products.map(prod => (
      <div className="items-center py-10 mx-auto">
        <Link to={`/DetailProduk`} state={{product:prod}}>
          <div className="w-[300px] h-[350px] border border-spacing-1 p-5 items-center flex flex-col shadow-lg" >
            <div className="">
              <img src={prod?.image} className="w-[150px] h-[200px]"/>
            </div>
            <div className="text-center justify-center py-5">
              <h1 className="font-bold text-xl w-100"> {prod?.title}</h1>
            </div>
          </div>
        </Link>
      </div>
      ))}
    </div>
    </>


  )
}


export default Katalog

