import React from "react";

import styles from "@styles/Product.module.scss";
import {useNavigate} from "react-router-dom";

interface IProduct {
    id: number;
    image: string;
    title: string;
    price: number;
    addToShopper: (id: number) => {};
    removeFromShopper: (id: number) => {};
    inShopper: boolean;
    notShowAction: boolean
}

const Product: React.FC<IProduct> = ({
                                         id,
                                         image,
                                         title,
                                         price,
                                         addToShopper,
                                         removeFromShopper,
                                         inShopper,
                                         notShowAction = false
                                     }) => {
    const navigate = useNavigate();
    console.log(inShopper)
    return (
        <div className={`${styles.product}`}>
            <div onClick={() => navigate(`/product/${id}`)}>
                <img
                    src={image}
                    width="50px"
                    className={`${styles.product_image}`}
                    alt="Фото изображения"
                />{" "}
                <br/>
                <span className={`${styles.product_title}`}> {title} </span> <br/>
            </div>
            <span className={`${styles.product_price}`}>&#8381; {price} </span>
            {!notShowAction && <span>
      {inShopper &&
      <div className={`${styles.product_removeFromShopper}`} onClick={() => removeFromShopper(id)}>Убрать из
          корзины</div>}
                {!inShopper &&
                <div className={`${styles.product_addToShopper}`} onClick={() => addToShopper(id)}>Добавить в
                    корзину</div>}
      </span>}
        </div>
    );
};

export default Product;
