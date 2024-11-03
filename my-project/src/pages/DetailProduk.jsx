import React, {useState} from 'react';
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom'

function DetailProduk() {

const location = useLocation()
const product = location?.state?.product;

    const [likes, setLikes] = useState ('');
    const toggleLike = () =>  {

      if (likes > 0) {
        setLikes (likes - 1);
      } else {
        setLikes (likes + 1);
      }
    }

  return (
    <>

    <div className="w-screen h-screen flex flex-col justify-content items-center">
      <div className="w-full flex justify-center p-[40px]  bg-slate-300">
        <h1 className="text-2xl">Home / Detail Product</h1>
      </div>
      <div className="flex gap-20 py-5">
        <div className="flex flex-col ">
          <img src={product?.image} className="w-[200px] h-[250px]"/>
        </div>
        <div className="flex flex-col w-[350px] h-[350px] py-5">
            <div className="title flex-col border rounded-md w-[100%] p-3">
              <h2 className="font-bold text-2xl">{product?.title}</h2>
            </div>
            <div className="condition flex-col border rounded-md w-[100%] p-3 ">
              <h3 className="font-bold text-2xl">Kondisi Pakaian : </h3>
              <h2 className="text-xl">Bekas, Masih Layak Pakai</h2>
            </div>
            <div className="location border rounded-md w-[100%] p-3 ">
              <h3 className="font-bold text-2xl ">Lokasi : </h3>
              <h2 className="text-xl">Jabodetabek</h2>
            </div>
        </div>
        <div className=" flex flex-col py-5 w-[150px]">
            <Link to = {'/'} className="flex rounded-xl  text-black p-3 justify-center gap-3 my-2 cursor-pointer bg-teal-400 font-bold">
              <h1 className="text-xl ">Profil</h1>
            </Link>
            <Link to = {'/Katalog'} className="flex rounded-xl  text-white p-3 justify-center gap-3 my-2 cursor-pointer bg-black font-bold">
              <h1 className="text-xl ">Katalog</h1>
            </Link>
            <div className="w-[100px] flex rounded-full  text-black p-3 justify-center gap-3 my-2 cursor-pointer bg-amber-300 font-bold " onClick={toggleLike}>
              <MdFavorite  className="text-2xl"/>
              <h1 className="text-xl " > Like  <span>{likes}</span></h1>
            </div>
            <div className='flex'>
            </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default DetailProduk;