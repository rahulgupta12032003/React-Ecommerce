import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";
import {Link} from "react-router-dom"

const Home = () => {

    const [products, setProducts] = useState([]);

    const loadData = async () => {
       const res = await fetch("http://localhost:3000/products");
       const data = await res.json();
       setProducts(data);
    }

    useEffect(() => {
      loadData();
    },[]);

    console.log(products);

  return (

        <div>
              
            <div className="p-10 mt-15 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">

              {

                products.map((elem,index) => {

                return (

                  <div className="rounded overflow-hidden shadow-lg"  key={index}>

                    <img className="w-60 h-60 m-auto" src={elem.imageURL} alt="Mountain" />

                    <div className="px-6 py-4">
                      <div className=" text-xl mb-2 text-center">{elem.name}</div>
                    </div>

                    <div className="px-6 pt-4 pb-2 mt-5 flex justify-between">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{elem.brandName}</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{elem.discount}</span>
                    </div>

                    <div className="px-6 pt-4 pb-2 mt-5 flex justify-between">
                      <span className=" inline-block mt-2 bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ "$" + " " + elem.price}</span>

                      <Link 
                      to={`/product/${index+1}`}
                      className="inline-block bg-gray-200 w-20 bg-red-200 text-3xl pl-7  h-10 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"  >
                        <BsFillCartCheckFill />
                      </Link>

                    </div>

                  </div>
                    
                )})  
              }    

           </div>
               
        </div>
  )
}

export default Home;