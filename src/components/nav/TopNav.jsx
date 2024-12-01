import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <Link to="/Home">
              <img
                src="/FreshHub-Logo.webp"
                className="fresh-hub-icon"
                alt="No image"
              />
            </Link>
          </div>

          <div className="nav-links">
            <div className="list-items">
              <ul className="unordered-list">
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Our-Services">Services</Link>
                </li>
                <li>
                  <Link to="/Products">Products</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="nav-actions">
              <ul className="unordered-list">
                <li>
                  <div className="login-button">
                    <Link to="/login">Login</Link>
                  </div>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
          </div>

          <a href="" className="toggle-btn">
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default TopNav;
