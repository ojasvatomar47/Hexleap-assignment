"use client"

import { useEffect, useState } from "react";
import TeamsSection from "@/components/TeamsComponent/TeamsComponent";
import SpotlightSection from "@/components/SpotlightTeamsComponents/SpotlightTeamsComponent";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";
import { SPOTLIGHT_TEAMS } from "@/constants/spotlightTeams";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = getLocalStorageItem('darkMode');

    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);

  const nextSlide = () => {
    setCardVisible(true)

    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === SPOTLIGHT_TEAMS.length - 1 ? 0 : prevIndex + 1
      );
      setCardVisible(false);
    }, 300);
  };

  const prevSlide = () => {
    setCardVisible(true)

    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? SPOTLIGHT_TEAMS.length - 1 : prevIndex - 1
      );
      setCardVisible(false);
    }, 300);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    setLocalStorageItem('darkMode', newDarkMode);
  };

  return (
    <main className={`flex flex-col gap-10 px-4 md:px-8 lg:px-16 py-6 md:py-10 ${darkMode ? 'bg-black text-white' : 'bg-[#F7F7F8] text-black'}`}>
      
      {/* Toggle Dark Mode Button */}
      <button className="text-[12px] md:text-md xl:text-lg font-semibold absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <TeamsSection darkMode={darkMode} />
      <SpotlightSection darkMode={darkMode} activeCardIndex={activeIndex} handleNextClick={nextSlide} handlePrevClick={prevSlide} cardVisible={cardVisible} />
    </main>
  );
}
