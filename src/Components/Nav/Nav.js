import React from "react";
import LeftPart from "./Left/LeftPart";
import RightPart from "./Right/RightPart";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav className="flex-row" style={{justifyContent:"space-between" }} >
        <LeftPart />
        <RightPart />
      </nav>
    </div>
  );
}

export default Nav;
