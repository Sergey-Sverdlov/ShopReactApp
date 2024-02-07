//@ts-nocheck
import React from "react";

import ProductFullInformation from "@components/ProductFullInformation";
import Products from "@components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "@components/ShoppingCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product">
          <Route path=":id" element={<ProductFullInformation />} />
        </Route>
      <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
