import React from "react";
function BannerLeft() {
  return (
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
  );
}

export default BannerLeft;
