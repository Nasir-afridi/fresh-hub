import React from "react";
import Feature from "../components/home/feature";
import Categories from "../components/home/categories";
import { Features } from "../constant/features";
import Banner from "../components/banner/banner";
import Eco from "../components/eco-container/Eco";

const Home = () => {
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
      <Banner />
      <Categories />
      <Eco />
    </>
  );
};

export default Home;
