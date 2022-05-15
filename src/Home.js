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
          id={"1234451"}
          title={
            "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          }
          price={20.99}
          rating={5}
          image={
            "https://static-01.daraz.lk/p/ec7cf79d40178dcae04f367394a6629d.jpg"
          }
        />
        <Product
          id={"1234452"}
          title={
            "Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)"
          }
          price={50.99}
          rating={3}
          image={
            "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg"
          }
        />
      </div>

      <div className="home__row">
        <Product
          id={"1234453"}
          title={
            "AIMENGXI 3 in 1 Diamond Microdermabrasion Machine Professional Beauty Facial Skin Care Equipment Microdermabrasion Device with Vacuum Spray"
          }
          price={180.99}
          rating={4}
          image={"https://m.media-amazon.com/images/I/71ds-6sS6KL._SX466_.jpg"}
        />
        <Product
          id={"1234454"}
          title={
            "Cosonsen Women's Dress Deep V-Neck Long Sleeve Waist Tie Ruffle Mini Swing Skater Dresses"
          }
          price={90.23}
          rating={4}
          image={
            "https://m.media-amazon.com/images/I/5195ws6rUHL._AC_UX466_.jpg"
          }
        />
        <Product
          id={"1234455"}
          title={
            "Smart Watch, Fitness Tracker with Heart Rate Monitor for Women and Men"
          }
          price={110.25}
          rating={4}
          image={
            "https://m.media-amazon.com/images/I/71bo79sXwyL._AC_SX466_.jpg"
          }
        />
      </div>

      <div className="home__row">
        <Product
          id={"12344516"}
          title={
            "SAMSUNG J791 Series 34-Inch Ultrawide QHD (3440x1440) Computer Monitor, 100Hz, Thunderbolt 3 Daisy Chain, QLED, HDMI, USB Hub, Height Adjustable Stand"
          }
          price={680.0}
          rating={5}
          image={
            "https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_SX679_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
