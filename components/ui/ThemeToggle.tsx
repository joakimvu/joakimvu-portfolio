"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false); // New state to track mount status

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

  // Use react-responsive to check if the screen width is at least 768px
  const isLargeDevice = useMediaQuery({ query: "(min-width: 768px)" });

  // Set the mounted state to true after the component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing until the component is mounted
  }

  return (
    <div>
      {isLargeDevice ? (
        <div
          className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-white-200 cursor-pointer rounded-full p-1"
          onClick={() => setDarkMode(!darkMode)}
        >
          <FaMoon className="text-white" size={18} />
          <div
            className={`absolute bg-white dark:bg-gray-700 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              darkMode ? "translate-x-0" : "translate-x-8"
            }`}
          ></div>
          <BsSunFill className="ml-auto text-yellow-400" size={18} />
        </div>
      ) : (
        <div
          className="relative w-7 h-7 flex items-center dark:bg-gray-900 bg-white-200 cursor-pointer rounded-full p-1"
          onClick={() => setDarkMode(!darkMode)}
        >
          {/* Content for small devices */}
          {darkMode ? (
            <BsSunFill className="ml-auto text-yellow-400" size={18} />
          ) : (
            <FaMoon className="text-white" size={18} />
          )}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
