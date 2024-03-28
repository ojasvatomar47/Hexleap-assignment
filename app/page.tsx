"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

const teams = [
  {
    image: "/team1.jpeg",
    teamName: "Sacramento River Cats",
    topEvents: 48,
    sport: "Baseball",
  },
  {
    image: "/teamb.jpeg",
    teamName: "Las Vegas Aviators",
    topEvents: 28,
    sport: "Baseball",
  },
  {
    image: "/teamc.jpeg",
    teamName: "New Jersey Devils",
    topEvents: 15,
    sport: "Ice Hockey",
  },
  {
    image: "/teamb.jpeg",
    teamName: "Las Vegas Aviators",
    topEvents: 28,
    sport: "Baseball",
  },
  {
    image: "/ad-image.jpeg",  // Replace with the actual path to the ad image
    teamName: "Advertisement title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  // Ad description
    isAd: true,  // New property to identify it as an ad
  },
];

const spotlightTeams = [
  {
    image: "/one.jpeg",
    teamName: "Las Vegas Aviators",
    date: "OCT 15",
    day: "SUN",
    time: "4:30 PM",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonLabel: "Take Flights Collection"
  },
  {
    image: "/two.jpeg",
    teamName: "Sacramento River Cats",
    date: "OCT 15",
    day: "SUN",
    time: "4:30 PM",
    address: "Sutter Health Park, Sacramento, California",
    buttonLabel: "Orange Collection"
  },
  {
    image: "/three.jpeg",
    teamName: "Las Vegas Aviators",
    date: "OCT 15",
    day: "SUN",
    time: "4:30 PM",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonLabel: "Take Flights Collection"
  },
  // {
  //   image: "/one.jpeg",
  //   teamName: "Las Vegas Aviators",
  //   date: "OCT 15",
  //   day: "SUN",
  //   time: "4:30 PM",
  //   address: "Las Vegas Ballpark, Las Vegas, Nevada",
  //   buttonLabel: "Take Flights Collection"
  // },
  // {
  //   image: "/two.jpeg",
  //   teamName: "Sacramento River Cats",
  //   date: "OCT 15",
  //   day: "SUN",
  //   time: "4:30 PM",
  //   address: "Sutter Health Park, Sacramento, California",
  //   buttonLabel: "Orange Collection"
  // },
  // {
  //   image: "/three.jpeg",
  //   teamName: "Las Vegas Aviators",
  //   date: "OCT 15",
  //   day: "SUN",
  //   time: "4:30 PM",
  //   address: "Las Vegas Ballpark, Las Vegas, Nevada",
  //   buttonLabel: "Take Flights Collection"
  // },
];

const TeamCard = ({ image, teamName, topEvents, sport, description, isAd, darkMode }: any) => {
  const cardClass = darkMode
    ? "p-2 flex flex-col items-start justify-center w-[238.53px] h-[511px] text-white relative transition-transform duration-300 hover:scale-105 bg-gray-800"
    : "p-2 flex flex-col items-start justify-center w-[238.53px] h-[511px] text-black relative transition-transform duration-300 hover:scale-105 bg-white";

  const shadowClass = "0px 12px 24px 0px #0000001A";

  if (isAd) {
    return (
      <div className={`${cardClass}`} style={{ boxShadow: shadowClass }}>
        <div className="relative w-full h-full overflow-hidden">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-md z-10">
            Ad
          </div>
          <Image src={image} alt={teamName} layout="fill" objectFit="cover" className="object-cover object-center w-full h-full" />
        </div>
        <div className="border-[1px] px-3 py-4 border-green-600">
          <h2 className="text-xl font-semibold mt-4">
            {teamName}
          </h2>
          <p className="text-sm mt-1">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${cardClass}`} style={{ boxShadow: shadowClass }}>
      <div className="relative w-full h-full overflow-hidden">
        <Image src={image} alt={teamName} layout="fill" objectFit="cover" className="object-cover object-center w-full h-full" />
      </div>
      <h2 className="text-lg font-semibold mt-4">
        {teamName}
      </h2>
      <div className={`${darkMode ? 'bg-[#292B32]' : 'bg-gray-100'} mt-4 p-2 rounded-sm w-full`}>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className={`text-xs font-semibold ${darkMode ? 'text-[#DFDFDF]' : 'text-[#525965]'}`}>
              Total Events
            </span>
            <span className="text-xs font-bold">
              {topEvents}
            </span>
          </div>
          <div className="flex flex-col">
            <span className={`text-xs font-semibold ${darkMode ? 'text-[#DFDFDF]' : 'text-[#525965]'}`}>
              Sport
            </span>
            <span className="text-xs font-bold">
              {sport}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpotlightTeamCard = ({ image, teamName, date, day, time, address, buttonLabel, darkMode }: any) => {
  const cardClass = darkMode
    ? "cursor-pointer p-4 rounded-md h-[500px] w-[195px] md:h-[625px] md:w-[230px] lg:h-[625px] lg:w-[257px] relative transition-transform duration-300 hover:scale-105 bg-[#3B3E47]"
    : "cursor-pointer p-4 rounded-md h-[500px] w-[195px] md:h-[625px] md:w-[230px] lg:h-[625px] lg:w-[257px] relative transition-transform duration-300 hover:scale-105 bg-white";

  const shadowClass = "0px 12px 24px 0px #0000001A";

  return (
    <div className={`${cardClass}`} style={{ boxShadow: shadowClass }}>
      {/* Semi-circle cuts */}
      <div className="absolute top-[67.5%] left-0 w-4 h-4 rounded-full bg-[#F7F7F8] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-[67.5%] right-0 w-4 h-4 rounded-full bg-[#F7F7F8] transform translate-x-1/2 -translate-y-1/2"></div>

      {/* Image */}
      <div className="relative w-full h-[65%] overflow-hidden mb-4 shadow-xl">
        <Image src={image} alt={teamName} layout="fill" objectFit="cover" className="object-cover object-center" />
      </div>

      {/* Dashed Line */}
      <div className={`border-t border-dashed ${darkMode ? 'border-gray-600' : 'border-gray-300'} mb-4`}></div>

      {/* Team Name */}
      <h2 className="text-sm md:text-lg font-semibold text-center mb-2 md:h-14">{teamName}</h2>

      {/* Date, Day, Time */}
      <p className={`text-[10px] md:text-sm text-center mb-2 ${darkMode ? 'text-gray-300' : 'text-black'}`}>{date} | {day} | {time}</p>

      {/* Address */}
      <p className={`text-[10px] md:text-xs text-center ${darkMode ? 'text-[#DFDFDF]' : 'text-[#525965]'} mb-4 px-3`}>{address}</p>

      {/* Button */}
      <button className="w-full text-[10px] md:text-sm px-3 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300">
        {buttonLabel}
      </button>
    </div>
  );
};

export default function Home() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode state from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  const handleNextClick = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % spotlightTeams.length);
  };

  const handlePrevClick = () => {
    setActiveCardIndex((prevIndex) => (prevIndex - 1 + spotlightTeams.length) % spotlightTeams.length);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
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
            {/* Your TeamCards */}
            {teams.map((team, index) => (
              <TeamCard key={index} {...team} darkMode={darkMode} />
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

          {/* Cards */}
          <div className="flex-1 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-y-3 gap-x-4 relative" style={{ transform: `translateX(-${activeCardIndex * (100 / spotlightTeams.length)}%)` }}>
              {spotlightTeams.map((team, index) => (
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