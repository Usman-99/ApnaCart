import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList"
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products=[{
    name:"Infinix Note 7",
    price:18000,
    quantity:0
  },
  {
    name:"Samsung A 22",
    price:30000,
    quantity:0
  }
  ];
let [productList,setproductList]=useState(products);
let [totalAmount,setTotalAmount]=useState(0);
const incrementQuantity=(index)=>{
  let newProductList=[...productList];
  newProductList[index].quantity++;
  let newTotalAmount=totalAmount;
  newTotalAmount+=newProductList[index].price;
  setproductList(newProductList);
  setTotalAmount(newTotalAmount);
} 
const decrementQuantity=(index)=>{
  let newProductList=[...productList];
  let newTotalAmount=totalAmount;
  if (newProductList[index].quantity>0){
    newProductList[index].quantity-- ;
    newTotalAmount-=newProductList[index].price;
  }
  setproductList(newProductList);
  setTotalAmount(newTotalAmount)
};
const resetQuantity=()=>{
  let newProductList=[...productList];
  newProductList.map((products)=>{
    products.quantity=0
  });
  setproductList(newProductList);
  setTotalAmount(0);
};
const removeItem=(index)=>{
  let newProductList=[...productList];
  let newTotalAmount=totalAmount
  newTotalAmount-=newProductList[index].price*newProductList[index].quantity;
  newProductList.splice(index,1);
  setproductList(newProductList);
  setTotalAmount(newTotalAmount);
}
const addItem=(name,price)=>{
  let newProductList=[...productList];
  newProductList.push({
    name:name,
    price:price,
    quantity:0
  });
  setproductList(newProductList);
}
  return (
    <>
      <Navbar />
      <AddItem addItem={addItem}/>
      <main className=" container mt-5"><ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/></main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
