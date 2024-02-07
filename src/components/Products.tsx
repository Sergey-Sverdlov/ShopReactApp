// @ts-nocheck
import React from "react";

import {useState, useEffect} from "react";
import Pagination from "@components/Pagination";
import Product from "@components/Product";
import Search from "@components/Search";
import ShoppingButton from "@components/ShoppingButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "@styles/Products.scss";

export interface products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
}

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState<products[] | null>(null);
  const [loading, setLoading] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [chooseItems, setChooseItems] = React.useState(JSON.parse(window.localStorage.getItem('chooseItems')));
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage] = React.useState(5);

  React.useEffect(() => {
    const fetch = async () => {
      setLoading(1);
      try {
        const res = await axios({
          method: "get",
          url: "https://fakestoreapi.com/products",
        });
        setLoading(0);
        setProducts(res.data);
      } catch (e) {
        setLoading(-1);
      }
    };
    fetch();
  }, []);



  const showPrice = () => {
      console.log(chooseItems)
        if (chooseItems.length > 0) {
            let price = chooseItems.reduce((price, currentItem) => price + currentItem.price, 0)
            return price
        }
        return 0
    }

    React.useEffect(() => {
        console.log(chooseItems)
        window.localStorage.setItem('chooseItems', JSON.stringify(chooseItems));
        setTotalPrice(showPrice())
    }, [chooseItems]);


  if (loading === -1) {
    return <div style={{ fontSize: "50px" }}>Ошибка при загрузке данных</div>;
  }
  if (loading === 1 || products === null) {
    return <div style={{ fontSize: "50px" }}>Загрузка</div>;
  }

  const addToShopper = (id) => {
    let item = products.find((item) => {
      if (item.id === id) {
        return item
      }
    })
    setChooseItems([...chooseItems, item]);
  }

    const removeFromShopper = (id) => {
        let ItemsArray = chooseItems.filter(el => el.id !== id);
        setChooseItems([...ItemsArray]);
    }

  const inShopper = (id) => {
      for (let i = 0; i < chooseItems.length; i++) {
          if (chooseItems[i].id === id) {
              return true;
          }
      }
      return false;
  }



  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div>
      <span className="all">
        Все товары <sup style={{ fontSize: "14px" }}>[{products.length}]</sup>
      </span>

      <Search />

      <ShoppingButton chooseItems={chooseItems}/>

      <div className="container">
        {currentProduct.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            key={product.id}
            addToShopper={addToShopper}
            removeFromShopper={removeFromShopper}
            inShopper = {inShopper(product.id)}
          />
        ))}
      </div>
        <h1> {totalPrice}</h1>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

export default React.memo(Products);
