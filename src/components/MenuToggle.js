import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MenuToggle = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="menuToggle toggle" onClick={() => setOpenMenu(!openMenu)}>
      <FontAwesomeIcon className="menu" icon={faCaretDown} />
      <div className="dropdown" style={{ display: openMenu ? "block" : "none" }}>
        <div id="myDropdown" className="dropdown-content">
          <a href="/about">About Me</a>
          <a href="/contact">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default MenuToggle;
