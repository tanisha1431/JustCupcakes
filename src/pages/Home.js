import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bannercupcake.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Just Cupcakes ! </h1>
        <p> A Dessert that never tasted this good!</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
