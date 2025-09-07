import React from "react";

import "./DarkMode.css";

import Sun from "./Sun.svg?react";
import Moon from "./Moon.svg?react";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedItem", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedItem", "light");
  };

  const selectedItem = localStorage.getItem("selectedItem"); //reload ke baad phele yeh chalega localstorage save karega
  if (selectedItem === "light") {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedItem !== "light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
