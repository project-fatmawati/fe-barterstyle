import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import Shirt from "../assets/shirt.png";

const ItemCard = () => {
  return (
    <div className="w-full grid grid-cols-5 mb-4 border p-[50px] ">
      <div className="col-span-1 flex items-center gap-4 ml-4">
      <RiCloseLargeFill className="text-primeColor hover:text-red-500 duration-300 cursor-pointer " />
      </div>
      <div className="col-span-2 flex items-center gap-4">
        <img className="w-[200px] h-[200px]" src={Shirt} alt="productImage" />
        <h1 className="font-titleFont font-semibold">Kemeja Atasan</h1>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <div className="flex items-center gap-2 px-5">
          <button className="w-6 h-6 bg-gray-100 text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300">
            -
          </button>
          <p> 1</p>
          <button className="w-6 h-6 bg-gray-100 text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;