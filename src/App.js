import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import React, { useState } from "react";
import Footer from "./component/Footer";
import AddItem from "./component/AddItem";
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

  const removeItem = (index) => {
    let newProductList = [...product];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const addItem = (name, price) => {
    let newProductList = [...product];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    })
    setProductList(newProductList);;
  };
  return (
    <>
      <Navbar />
      <br />
      <main>
        <AddItem addItem={addItem}/>
        <br />
        <ProductList
          productList={product}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
