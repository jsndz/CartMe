import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import React, { useState } from "react";
import Footer from "./component/Footer";
function App() {
  let [product, setProductList] = useState([
    {
      price: 99999,
      name: "Iphone",
      quantity: 0,
    },
    {
      price: 12222,
      name: "Redmi",
      quantity: 0,
    },
  ]);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...product];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...product];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...product];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };
  return (
    <>
      <Navbar />
      <main>
        <ProductList
          productList={product}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
