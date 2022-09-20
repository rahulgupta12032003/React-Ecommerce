import React from 'react'

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

  console.log(items)

  return (
    <div>
        Hello World
    </div>
  )
}

export default Cart