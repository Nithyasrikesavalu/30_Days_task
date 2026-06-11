import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"}`} >
      <h1 className="text-3xl font-bold mb-6"> Dark Mode Toggle</h1>

      <button onClick={toggleTheme} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
          darkMode
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Switch to {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h2 className="mt-6 text-xl">
        Current Mode: {darkMode ? "Dark Mode" : "Light Mode"}
      </h2>
    </div>
  );
};

export default DarkModeToggle;