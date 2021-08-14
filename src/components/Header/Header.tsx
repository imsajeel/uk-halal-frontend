import React from "react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import "./header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="top-most">
        We only delivers in radius of 3 miles from UK HALAL (LU4 8LS)
      </div>
      <div className="top flex-center">
        <div className="top-content max-width-custom">
          <div className="phone-number">
            <FaPhoneAlt /> (01582) 57 02 47
          </div>
          <div className="link">Customer Care</div>
          <div className="link">Login</div>
        </div>
      </div>
      <div className="main flex-center">
        <div className="main-content max-width-custom">
          <div className="logo">
            UK
            <b
              style={{
                color: "var(--color-main)",
                marginLeft: "5px",
                fontWeight: 1000,
              }}
            >
              HALAL
            </b>
          </div>
          <div className="search-box flex-center">
            <input
              type="text"
              className="search-textbox"
              placeholder="Search entire store here..."
              style={{
                fontSize: "1rem",
                padding: "10px",
                borderRadius: "0.5rem 0 0 0.5rem",
              }}
            />
            <button
              className="color-a"
              style={{
                fontSize: "1rem",
                padding: "10px",
                borderRadius: "0 0.5rem 0.5rem 0",
              }}
            >
              <FaSearch />
            </button>
          </div>
          <div className="cart-buttons">
            <button className="transparent">
              <FiHeart />
            </button>
            <button className="transparent cart-btn">
              <FiShoppingCart />
              <div className="cart-count">2</div>
            </button>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
