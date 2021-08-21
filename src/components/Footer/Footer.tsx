import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex-center">
      <div className="content max-width-custom">
        <div
          style={{
            color: "darkgray",
            height: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          © ukhalal.store 2021. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
