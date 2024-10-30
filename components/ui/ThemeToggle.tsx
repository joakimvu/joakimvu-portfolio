"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-white-200 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={18} />
      {darkMode ? (
        <div className="text-white"></div> // Optional text for dark mode
      ) : (
        <div className="text-gray-800"></div> // Optional text for light mode
      )}
      <div
        className={`absolute bg-white dark:bg-gray-700 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-0" : "translate-x-8"
        }`}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default ThemeToggle;
