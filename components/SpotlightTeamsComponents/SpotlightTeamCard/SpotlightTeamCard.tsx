import Image from 'next/image';

interface SpotlightTeamCardProps {
    image: string;
    teamName: string;
    date: string;
    day: string;
    time: string;
    address: string;
    buttonLabel: string;
    darkMode: boolean;
}

const SpotlightTeamCard: React.FC<SpotlightTeamCardProps> = ({ image, teamName, date, day, time, address, buttonLabel, darkMode }) => {
    const cardClass = darkMode
        ? "cursor-pointer p-4 rounded-md h-[500px] w-[195px] md:h-[600px] md:w-[215px] xl:h-[625px] xl:w-[257px] relative transition-transform duration-300 hover:scale-105 bg-[#3B3E47]"
        : "cursor-pointer p-4 rounded-md h-[500px] w-[195px] md:h-[600px] md:w-[215px] xl:h-[625px] xl:w-[257px] relative transition-transform duration-300 hover:scale-105 bg-white";

    const shadowClass = "0px 12px 24px 0px #0000001A";

    return (
        <div className={`${cardClass}`} style={{ boxShadow: shadowClass }}>

            {/* Semi-circle cuts for both edges */}
            <div className={`absolute top-[67.2%] left-[5px] transform -translate-y-1/2 -translate-x-1/2 h-4 w-3 ${darkMode ? 'bg-gradient-to-b from-[#18282A] to-[#221A2C]' : 'bg-blue-100'} rounded-r-full`}></div>
            <div className={`absolute top-[67.2%] right-[5px] transform -translate-y-1/2 translate-x-1/2 h-4 w-3 ${darkMode ? 'bg-gradient-to-b from-[#18282A] to-[#221A2C]' : 'bg-blue-100'} rounded-l-full`}></div>

            {/* Image */}
            <div className="relative w-full h-[65%] overflow-hidden mb-4 shadow-xl">
                <Image src={image} alt={teamName} fill={true} className="object-cover object-center" />
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

export default SpotlightTeamCard;
