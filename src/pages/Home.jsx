import React from "react";
import Feature from "../components/home/feature";
import { Features } from "../constant/features";

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
          {/* <Feature
            image="/svgviewer-output.svg"
            heading="Support 24 h"
            description="Dedicated Support"
          />
          <Feature
            image="/svgviewer-output-2.svg"
            heading="Secure Payment"
            description="Ensure your money is safe"
          />
          <Feature
            image="/svgviewer-output-3.svg"
            heading="Refundable"
            description="Demage items can refund it"
          />
          <Feature
            image="/svgviewer-output-4.svg"
            heading="Free Shipping"
            description="Order Over $40"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
