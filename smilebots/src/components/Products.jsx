import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

const getLocalStorageItems = () => {
    let listItems = localStorage.getItem("productsInfo");
    console.log(listItems)
 
    if(listItems){
       return JSON.parse(localStorage.getItem("productsInfo"))
    }
    else{
       return [];
    }
 }

const Products = () => {

    const { id } = useParams();
    // console.log(id)
    const [singleProduct , setSingleProduct] = useState(getLocalStorageItems);

    const personData = async () => {
        axios.get(`http://localhost:3000/products/${id}`).then((res) => {
           setSingleProduct(res.data);
        });
    }

    useEffect(() => {
        personData();
    },[]);

    console.log(singleProduct);

    useEffect(() => {
        localStorage.setItem("productsInfo" , JSON.stringify(singleProduct));
      }, [singleProduct]);
  

  return (
    <div>
        <h2 className=" text-center mt-10 text-3xl font-bold text-gray-500">👇👇👇 Here is Your Selected Product 👇👇👇 </h2>
      <div className="h-500 w-[50%] bg-lime-300 justify-center items-center flex flex-col rounded-2xl m-auto mt-[3%] border-solid border-2 border-sky-500">
        {
          singleProduct && (
              <>  
                  
                  <img className="w-60 h-60 m-auto" src={singleProduct.imageURL} alt="Mountain" />
                  <p className="text-blue-900 font-semibold text-xl float-left mt-5">{singleProduct.name}</p>
                  <p className="text-blue-900 font-semibold text-xl float-left mt-5">{singleProduct.brandName}</p>
                  <p className="text-blue-900 font-semibold text-xl float-left mt-5">{singleProduct.rating + "⭐"}</p>
                  <p className="text-red-800 font-semibold text-xl float-left mt-5">{"$" + " " +singleProduct.price}</p>
                  <p className="text-blue-900 font-semibold text-xl float-left mt-5">{singleProduct.discount}</p>
                  <p className="text-blue-900 font-semibold text-xl float-left mt-5">{singleProduct.sellerName}</p>

              </>  
          )
        } 
      </div>
      <div className="mt-10 flex w-full justify-center">
        <Link to="/" className="hover:bg-rose-800 bg-white hover:shadow-md bg-stone-400 text-2xl outline-none rounded-xl font-bold border mt-8 hover:text-gray-200 text-red-600 border-zinc-400 py-4 px-4 pl-4">GO BACK TO HOME 🔙</Link>

        <Link to="/product/cart" className="hover:bg-rose-800 bg-white hover:shadow-md bg-stone-400 text-2xl outline-none rounded-xl font-bold border mt-8 hover:text-gray-200 text-red-600 border-zinc-400 py-4 px-4 pl-4 ml-10">GO TO CART 🛒</Link>
      </div>

    </div>
  )
}

export default Products