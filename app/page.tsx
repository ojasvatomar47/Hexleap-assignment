"use client"

import { useEffect, useState } from "react";
import TeamsSection from "@/components/TeamsComponent/TeamsComponent";
import SpotlightSection from "@/components/SpotlightTeamsComponents/SpotlightTeamsComponent";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";
import { SPOTLIGHT_TEAMS } from "@/constants/spotlightTeams";

export default function Home() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Loads dark mode state from localStorage
  useEffect(() => {
    const savedDarkMode = getLocalStorageItem('darkMode');

    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  const handleNextClick = () => {
    // setActiveCardIndex((prevIndex) => (prevIndex + 1) % SPOTLIGHT_TEAMS.length);
  };

  const handlePrevClick = () => {
    // setActiveCardIndex((prevIndex) => (prevIndex - 1 + SPOTLIGHT_TEAMS.length) % SPOTLIGHT_TEAMS.length);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Save to localStorage
    setLocalStorageItem('darkMode', newDarkMode);
  };

  return (
    <main className={`flex flex-col gap-10 px-4 md:px-8 lg:px-16 py-6 md:py-10 ${darkMode ? 'bg-black text-white' : 'bg-[#F7F7F8] text-black'}`}>
      {/* Toggle Dark Mode Button */}
      <button className="text-[12px] md:text-md xl:text-lg font-semibold absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <TeamsSection darkMode={darkMode} />
      <SpotlightSection darkMode={darkMode} activeCardIndex={activeCardIndex} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />
    </main>
  );
}
