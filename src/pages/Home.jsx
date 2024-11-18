import React from "react";

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
          </div>

          <div className="img-container">
            <img src="/hero-section-img.svg" className="hero-img" alt="" />
          </div>
        </div>

        <div className="hero-description">
          <p className="description">
            Experience grocery shopping and swift home <br /> delivery with our
            wide range of fresh produce <br /> and essentials
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
