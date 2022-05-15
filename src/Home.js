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
        <Product
          title={"The Lean Startup"}
          price={50.99}
          rating={5}
          image={
            "https://static-01.daraz.lk/p/ec7cf79d40178dcae04f367394a6629d.jpg"
          }
        />
        <Product />
      </div>

      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>

      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
