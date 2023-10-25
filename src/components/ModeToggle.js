import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

const ModeToggle = () => {
  const { toggle } = useContext(ThemeContext);

  return (
    <div className="modeToggle" onClick={toggle}>
      <FontAwesomeIcon className="lamp" icon={faLightbulb} />
    </div>
  );
};

export default ModeToggle;
