import React from "react";
import "./CheckoutProduct.css";
import { useStatevalue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStatevalue();

  const deleteFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__Image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__Title">{title}</p>
        <p className="checkoutProduct__Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={deleteFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
