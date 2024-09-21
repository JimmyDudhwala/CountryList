import { useState } from "react";


function TopHeader() {
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));

  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', newDarkMode);
    setIsDarkMode(newDarkMode);

  }


  return (
    <>
      <div className="top flex justify-between items-center pl-20 pr-20 bg-white dark:bg-black h-20 text-black dark:text-white border-b-2 border-red-300">
        <div className="text-2xl">Where in the World?</div>
        <button
          className="flex justify-between items-center border border-black dark:border-white p-2 rounded-lg"
          onClick={toggleDarkMode}
        >
          <i className={"fa fa-" + (isDarkMode ? "moon" : "sun")}></i>
          <span className="ml-2">{isDarkMode ? <h1>Dark-Mode</h1> : <h1>Light-Mode</h1>}</span>
        </button>
      </div>
    </>
  );
}

export default TopHeader;