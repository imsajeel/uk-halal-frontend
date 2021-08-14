import React from "react";
import { FaBars } from "react-icons/fa";

// const MOBILE = "MOBILE";
// const DESKTOP = "DESKTOP";

const Nav = () => {
  // const [displayType, setDisplayType] = useState<any>(MOBILE);

  // const onResizeCheckScreenSize = () => {
  //   const width = window.screen.width;
  //   if (width < 780) {
  //     setDisplayType(MOBILE);
  //   } else {
  //     setDisplayType(DESKTOP);
  //   }
  // };

  // window.onresize = onResizeCheckScreenSize;

  // const MenuItems = () => {
  //   return (
  //     <>
  //       <li>Groceries</li>
  //       <li>Meat</li>
  //       <li>Beverages</li>
  //       <li>Masala</li>
  //     </>
  //   );
  // };

  return (
    <div className="flex-center">
      <nav className="max-width-custom">
        <div style={{ margin: "10px" }}>Select by category</div>
        <li style={{ marginLeft: "auto" }}>
          <FaBars />
        </li>
      </nav>
    </div>
  );
};

export default Nav;
