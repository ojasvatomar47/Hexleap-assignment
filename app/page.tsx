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
];

const TeamCard = ({ image, teamName, topEvents, sport, description, isAd }: any) => {
  if (isAd) {
    return (
      <div
        className="p-2 flex flex-col items-start justify-center w-[238.53px] h-[511px] text-left relative transition-transform duration-300 hover:scale-105"
        style={{ boxShadow: '0px 12px 24px 0px #0000001A' }} // Increased shadow
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-md z-10">
            Ad
          </div>
          <Image src={image} alt={teamName} layout="fill" objectFit="cover" className="object-cover object-center w-full h-full" />
        </div>
        <div className="border-[1px] px-3 py-4 border-green-600">
          <h2 className="text-xl font-semibold text-[#000000] mt-4">
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
    <div
      className="cursor-pointer p-2 flex flex-col items-start justify-center w-[238.53px] h-[511px] text-left transition-transform duration-300 hover:scale-105"
      style={{ boxShadow: '0px 12px 24px 0px #0000001A' }} // Increased shadow
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image src={image} alt={teamName} layout="fill" objectFit="cover" className="object-cover object-center w-full h-full" />
      </div>
      <h2 className="text-lg font-semibold text-[#000000] mt-4">
        {teamName}
      </h2>
      <div className="bg-gray-100 mt-4 p-2 rounded-sm w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#525965]">
              Total Events
            </span>
            <span className="text-xs font-bold">
              {topEvents}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#525965]">
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

const SpotlightTeamCard = ({ image, teamName, date, day, time, address, buttonLabel }: any) => {
  return (
    <div
      className="cursor-pointer p-4 border rounded-md h-[625px] w-[257px] relative transition-transform duration-300 hover:scale-105"
      style={{ boxShadow: '0px 12px 24px 0px #0000001A' }}
    >
      {/* Semi-circle cuts */}
      <div className="absolute top-[433px] left-0 w-4 h-4 rounded-full bg-[#F7F7F8] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-[433px] right-0 w-4 h-4 rounded-full bg-[#F7F7F8] transform translate-x-1/2 -translate-y-1/2"></div>

      {/* Image */}
      <div className="relative w-[226px] h-[401px] overflow-hidden mb-4 shadow-xl">
        <Image src={image} alt={teamName} layout="fill" objectFit="cover" className="object-cover object-center" />
      </div>

      {/* Dashed Line */}
      <div className="border-t border-dashed border-gray-300 mb-4"></div>

      {/* Team Name */}
      <h2 className="text-lg font-semibold text-center mb-2">{teamName}</h2>

      {/* Date, Day, Time */}
      <p className="text-sm text-center mb-2">{date} | {day} | {time}</p>

      {/* Address */}
      <p className="text-xs text-center text-gray-500 mb-4 px-3">{address}</p>

      {/* Button */}
      <button className="w-full px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300">
        {buttonLabel}
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col gap-20 px-8 md:px-16 lg:px-32 py-10 bg-[#F7F7F8]">

      {/* First Section */}
      <section>
        {/* Heading */}
        <div className="mb-4">
          <h1 className="text-xl font-extrabold inline-block relative">
            Sports
            <div className="absolute top-8 bottom-0 left-0 w-full h-[2px] bg-blue-500"></div>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-3 md:gap-x-2">
          {/* Your TeamCards */}
          {teams.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
            See More
          </button>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col items-center justify-center relative">


        {/* Heading */}
        <div className="text-center mt-16 mb-4 flex flex-col items-center justify-center gap-6">
          <h1 className="text-5xl font-extrabold mb-2 relative">
            Collection Spotlight
          </h1>
          <p className="text-sm text-gray-500 mb-4 w-3/4">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
        </div>

        {/* TeamCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-x-7 relative">

          {/* Left Arrow */}
          <div className="absolute -left-24 top-1/2 transform -translate-y-1/2">
            <button className="p-2 text-2xl border-2 border-blue-400 text-blue-400 hover:text-white font-bold hover:bg-blue-400 transition-colors duration-300">
              &lt;
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute -right-24 top-1/2 transform -translate-y-1/2">
            <button className="p-2 text-2xl border-2 border-blue-400 text-blue-400 hover:text-white font-bold hover:bg-blue-400 transition-colors duration-300">
              &gt;
            </button>
          </div>
          {spotlightTeams.map((team, index) => (
            <SpotlightTeamCard key={index} {...team} />
          ))}
        </div>

      </section>

    </main>
  );
}
