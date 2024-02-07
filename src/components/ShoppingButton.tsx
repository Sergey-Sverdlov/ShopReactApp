// @ts-nocheck
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ShoppingButton.css"
const ShoppingButton = ({chooseItems}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/shoppingCart`, {state: {
                chooseItems: chooseItems,
            }})
        } >
          <span className="shopperCard">
              <span> Корзина </span>
              <span className="indicator">
                  <span className="noti_count">
                      {chooseItems.length}
                  </span>
              </span>
          </span>
        </div>
    )
}
export default ShoppingButton;