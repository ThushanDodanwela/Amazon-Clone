import React from "react";
import "./Product.css";
import { useStatevalue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStatevalue();

  const addToBusket = () => {
    //disptch the item into the data layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p> {title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBusket}> Add to Basket </button>
    </div>
  );
}

export default Product;
