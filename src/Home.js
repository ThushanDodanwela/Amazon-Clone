import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt="Banner"
        />
      </div>

      <div className="home__row">
        <Product />
        {/*product*/}
      </div>

      <div className="home__row">
        {/*product*/}
        {/*product*/}
        {/*product*/}
      </div>

      <div className="home__row">{/*product*/}</div>
    </div>
  );
}

export default Home;
