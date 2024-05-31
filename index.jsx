import React from "react";
import "./styles.css";
import useLocalStorage from "./useLocalStorage";

export default function DarkModeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function handleSetLightTheme() {
    setTheme("light");
  }

  function handleSetDarkTheme() {
    setTheme("dark");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p className="projectHeader">Light/Dark Mode Project</p>
        <div className="theme-switch-container">
          <div
            className={`toggler--light ${theme === "light" ? "active" : ""}`}
            onClick={handleSetLightTheme}
          >
            🌞 Light
          </div>
          <div className="theme-switch" onClick={handleToggleTheme}>
            <div
              className={`switch-icon ${theme === "light" ? "light" : "dark"}`}
            ></div>
          </div>
          <div
            className={`toggler--dark ${theme === "dark" ? "active" : ""}`}
            onClick={handleSetDarkTheme}
          >
            🌚 Dark
          </div>
        </div>
      </div>
    </div>
  );
}
