import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <nav>
        <div className="icon">
          <Link to="/Home">
            <img
              src="/FreshHub-Logo.webp"
              className="main-icon"
              alt="No image"
            />
          </Link>
        </div>

        <div className="list">
          <ul className="unordered-list">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Our-Services">Our-Services</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
