"use client"

import { useEffect, useState } from "react";
import { TEAMS } from "@/constants/teams";
import { SPOTLIGHT_TEAMS } from "@/constants/spotlightTeams";
import TeamCard from "@/components/TeamCard/TeamCard";
import SpotlightTeamCard from "@/components/SpotlightTeamCard/SpotlightTeamCard";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

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
    // setActiveCardIndex((prevIndex) => (prevIndex + 1) % spotlightTeams.length);
  };

  const handlePrevClick = () => {
    // setActiveCardIndex((prevIndex) => (prevIndex - 1 + spotlightTeams.length) % spotlightTeams.length);
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
      <button className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* First Section */}
      <section>
        {/* Heading */}
        <div className="mb-4">
          <h1 className="text-xl font-extrabold inline-block relative">
            Sports
            <div className="absolute top-8 bottom-0 left-0 w-full h-[2px] bg-blue-500"></div>
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-3 md:gap-x-2">
            {/* TeamCards */}
            {TEAMS.map((team, index) => (
              <TeamCard
                key={index}
                image={team.image}
                teamName={team.teamName}
                topEvents={team.topEvents}
                sport={team.sport}
                description={team.description}
                isAd={team.isAd}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <button className={`px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300`}>
            See More
          </button>
        </div>
      </section>

      {/* Second Section */}
      <section className={`flex flex-col px-4 md:px-6 items-center justify-center relative ${darkMode ? 'bg-gradient-to-b from-[#18282A] to-[#221A2C]' : 'bg-gradient-to-b from-purple-100 to-blue-100'} pb-7`}>

        {/* Heading */}
        <div className="text-center mt-8 md:mt-12 mb-4 flex flex-col items-center justify-center gap-4 md:gap-6">
          <h1 className={`text-3xl md:text-5xl font-extrabold mb-2 relative ${darkMode ? 'text-white' : 'text-black'}`}>
            Collection Spotlight
          </h1>
          <p className={`text-xs md:text-sm mb-4 w-full md:w-3/4 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
        </div>

        {/* TeamCards Container */}
        <div className="flex items-center justify-center w-full relative">

          {/* Left Arrow */}
          <button
            className={`p-1 md:p-2 text-xl md:text-2xl border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 font-bold transition-colors duration-300`}
            style={{ flex: '0 0 8%' }}
            onClick={handlePrevClick}
          >
            &lt;
          </button>

          {/* TeamCards */}
          <div className="flex-1 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-y-3 gap-x-4 relative" style={{ transform: `translateX(-${activeCardIndex * (100 / SPOTLIGHT_TEAMS.length)}%)` }}>
              {SPOTLIGHT_TEAMS.map((team, index) => (
                <div key={index} className="flex-none w-full md:w-1/3 px-1">
                  <SpotlightTeamCard {...team} darkMode={darkMode} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className={`p-1 md:p-2 text-xl md:text-2xl border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 font-bold transition-colors duration-300`}
            style={{ flex: '0 0 8%' }}
            onClick={handleNextClick}
          >
            &gt;
          </button>

        </div>

      </section>

    </main>
  );
}