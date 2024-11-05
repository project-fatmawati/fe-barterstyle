import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from '../components/ItemCard'
import shirt from '../assets/shirt.png'

const Cart = () => {

  return (
    <div className=" w-[80%] mx-auto px-4 p-[50px] ">
        <div className="pb-20">
        <div className=" flex justify-between w-full h-20 bg-[#F5F7F7] text-black flex justify-between items-center px-6 text-lg font-titleFont font-semibold border-[3px] border-black-700">
            <h2 className="flex-1 text-center">Product</h2>
            <h2 className="flex-1 text-center">Quantity</h2>
        </div>
        <ItemCard />
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Total Price</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    Free
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    10.000
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                Fee Transaction
                  <span className="font-semibold tracking-wide font-titleFont">
                    5.000
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    15.000
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/paymentgateway">
                  <button className="w-52 h-10 bg-primeColor  font-bold text-black border-[3px] border-black-200 hover:bg-black hover:text-white duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cart;