import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { FaRegLightbulb } from "react-icons/fa";

const ModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="mx-1 cursor-pointer rounded-full border-[1px] border-black p-2"
      onClick={toggle}
    >
      <FaRegLightbulb
        className={`${mode == "dark" ? `text-yellow-400` : null} , text-xl`}
      />
    </div>
  );
};

export default ModeToggle;
