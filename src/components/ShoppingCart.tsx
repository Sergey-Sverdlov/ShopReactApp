//@ts-nocheck
import React from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Product from "@components/Product";
import '../styles/ShoppingCart.css'

const ShoppingCart = ({route}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const array = location.state.chooseItems;
    if (array.length === 0) {
        return (
            <div>
                В корзине еще нет товаров
            </div>
        )
    }
    const calculatePrice = array.reduce((acc, item) => {
        return acc + item.price;
    }, 0)
    return (<div className="ShoppingCart-section">
        <div className="ButtonGoBack" onClick={() => navigate(-1)}>К списку товаров</div>
        <div className="ShoppingCart__link_wrap">
            <ul className="ShoppingCart_links">
                {array.map((item) => {
                    return <Product id={item.id} image={item.image} title={item.title} price={item.price} key={item.id}
                                    inShopper={true}/>
                })}
            </ul>
        </div>
        <span className="total_price">ИТОГО: {calculatePrice} </span>
    </div>)
}

export default ShoppingCart;