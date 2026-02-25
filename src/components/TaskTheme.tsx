import React, { useEffect, useState } from "react";
import Iconsun from "../icons/icon-sun";
import IconMoon from "../icons/icon-moon";

const TaskTheme = () => {
  const [theme, setTheme] = useState<string>("dark");

  const handleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("bg-dark", theme === "dark");
  }, [theme]);

  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="flex justify-start text-4xl tracking-[0.5em] font-bold text-[--very-light-gray] dark:text-[--grayish-blue] font-josefin">
        TODO
      </h1>
      <button aria-label="Change Theme" onClick={handleTheme}>
        {theme === "light" ? <IconMoon /> : <Iconsun />}
      </button>
    </div>
  );
};

export default TaskTheme;
