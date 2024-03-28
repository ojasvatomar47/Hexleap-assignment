import Image from 'next/image';

interface TeamCardProps {
    image: string;
    teamName: string;
    topEvents?: number;
    sport?: string;
    description?: string;
    isAd?: boolean;
    darkMode: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, teamName, topEvents, sport, description, isAd = false, darkMode }) => {
    const cardClass = darkMode
        ? "p-2 flex flex-col items-start justify-center w-[238.53px] h-[511px] text-white relative transition-transform duration-300 hover:scale-105 bg-gray-800"
        : "p-2 flex flex-col items-start justify-center w-[238.53px] h-[511px] text-black relative transition-transform duration-300 hover:scale-105 bg-white";

    const shadowClass = "0px 12px 24px 0px #0000001A";

    if (isAd) {
        return (
            <div className={`${cardClass}`} style={{ boxShadow: shadowClass }}>
                <div className="relative w-full h-full overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-tl-md rounded-bl-md rounded-br-md z-10">
                        Ad
                    </div>
                    <Image src={image} alt={teamName} layout="fill" objectFit="cover" className="object-cover object-center w-full h-full" />
                </div>
                <div className="border-[1px] px-3 py-4 border-green-900">
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

export default TeamCard;
