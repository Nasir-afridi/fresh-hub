import React from "react";
import Feature from "../components/home/feature";
import Categories from "../components/home/categories";
import { Features } from "../constant/features";

const Home = () => {
  console.log("parent");
  return (
    <>
      <div className="hero-container">
        <div className="sub-container">
          <div className="container">
            <p className="hero-section-heading">
              Your Ultimate <br /> Online
              <span className="grocessary"> Grocery</span>
            </p>
            <div className="hero-description">
              <p className="description">
                Experience grocery shopping and swift home <br /> delivery with
                our wide range of fresh produce <br /> and essentials
              </p>
            </div>
            <div className="button-div">
              <button className="hero-button">Learn More</button>
            </div>
          </div>

          <div className="img-container">
            <img src="/hero-section-img.svg" className="hero-img" alt="" />
          </div>
        </div>
      </div>
      <div className="icons-container">
        <div className="features-container">
          {Features.map((element) => (
            <Feature
              image={element.image}
              heading={element.heading}
              description={element.description}
            />
          ))}
        </div>
      </div>
      <div className="banner-section">
        <div className="banner-container">
          <div className="apple-img-container">
            <img src="/apple-img.png" className="apple-img" />
          </div>

          <div className="text-containers">
            <center>
              <p className="summer">SUMMER SALE</p>
              <p className="sale">40%OFF</p>
              <p className="fresh">Fresh Fruit</p>
              <p className="hundred">%100</p>
              <a href="#" className="button-shop">
                Shop Now &gt;
              </a>
            </center>
          </div>
        </div>

        <div className="banner-left">
          <div className="banner-text">
            <center>
              <p className="Fresh">
                Fresh <br /> Delivered <br /> Daily
              </p>
            </center>
            <div className="yougurat-image">
              <div className="yougurt-img-container">
                <img src="/yougart-img.png" className="yougurt-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Home;
