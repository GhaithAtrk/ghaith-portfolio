import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { FaRegLightbulb } from "react-icons/fa";

const ModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="border-[1px] border-black p-2 mx-1 rounded-full cursor-pointer"
      onClick={toggle}
    >
      <FaRegLightbulb className={`${mode == "dark" ? `text-white` : null}`} />
    </div>
  );
};

export default ModeToggle;
