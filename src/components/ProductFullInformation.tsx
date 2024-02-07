import React from "react";

import { products } from "@components/Products";
import axios from "axios";
import { useParams } from "react-router-dom";
import "@styles/ProductFullInformation.scss";

const ProductFullInformation = (): JSX.Element => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<products>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {},
  });

  React.useEffect(() => {
    const fetch = async () => {
      let product = await axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${id}`,
      });
      setProduct(product.data);
    };
    fetch().then(() => {});

  }, []);
  return (
    <div className="card">
      <img
        src={product.image}
        width="350px"
        className="image"
        alt="Фотография объекта"
      />{" "}
      <br />
      <div className="title">{product.title}</div>
      <div className="category">{product.category}</div>
      <div className="description">{product.description}</div>
      <div className="price">&#8381; {product.price}</div>
    </div>
  );
};
export default ProductFullInformation;
