import React, { useState } from 'react'

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

const Cart = () => {

  const [items , setItems] = React.useState(getLocalStorageItems());
  const [counter, setCounter] = useState(1);

  const handleCounter = (value) => {
    if(counter >= 1){
        setCounter(value + counter)
    }
    else{
        setCounter(1)
    }
  }

  console.log(items)

  return (
    <div>
        <h1 className=" text-4xl ml-10 mt-10 font-bold text-gray-500">CART</h1>
        <div className="h-500 w-[95%] bg-lime-300 items-center flex flex-col rounded-2xl m-auto mt-[3%] border-solid border-2 border-sky-500">

            <div className=" flex flex-col items-center">
            {
                items && (
                    <>
                      <div key={items.id} className=" flex items-center">
                        <div>
                           <img className="h-30 w-[20%]" src={items.imageURL} alt="" />
                        </div>
                        <div>
                           <p className="text-blue-900 font-semibold text-xl ml-[-70%] float-left mt-5">{items.name}</p>
                        </div>

                        <div className="text-red-800 font-semibold text-xl ml-[-20%] mr-10 float-left mt-5">price : {"$" + " " + items.price}</div>

                        <div className=" flex ">
                            <button onClick={() => handleCounter(1)} className="hover:bg-rose-800 bg-white hover:shadow-md bg-stone-400  outline-none rounded-xl font-bold border mt-8 hover:text-gray-200 text-red-600 border-zinc-400 py-4 px-4 pl-4 ml-2">ADD</button>
                            <h1 className="text-blue-900 font-bold mt-12" >{counter}</h1>
                            <button onClick={() => handleCounter(-1)} className="hover:bg-rose-800 bg-white hover:shadow-md bg-stone-400  outline-none rounded-xl font-bold border mt-8 hover:text-gray-200 text-red-600 border-zinc-400 py-4 px-4 pl-4 mr-2">REDUCE</button>
                        </div>

                        <div>
                            <button>REMOVE</button>
                        </div>
                        
                      </div>
                    </>
                )
            }
            </div>
        
        </div>
    </div>
  )
}

export default Cart