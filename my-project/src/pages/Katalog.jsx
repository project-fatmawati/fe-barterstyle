import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

function Katalog() {
  return (
    <>
      <div className="w-full flex justify-center p-[40px]  bg-slate-300">
        <h1 className="text-2xl">Home / Katalog</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full sm:w-1/4 px-5">
            <Sidebar />
          </div>
          <div className="w-full sm:w-3/4 px-5">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Katalog;