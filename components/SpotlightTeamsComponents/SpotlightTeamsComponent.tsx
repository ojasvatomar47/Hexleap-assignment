import SpotlightTeamCard from "@/components/SpotlightTeamsComponents/SpotlightTeamCard/SpotlightTeamCard";
import { SPOTLIGHT_TEAMS } from "@/constants/spotlightTeams";

interface SpotlightSectionProps {
    darkMode: boolean;
    activeCardIndex: number;
    cardVisible: boolean;
    handleNextClick: () => void;
    handlePrevClick: () => void;
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({ darkMode, activeCardIndex, handleNextClick, handlePrevClick, cardVisible }) => {
    return (
        <section className={`flex flex-col px-4 md:px-6 items-center justify-center relative ${darkMode ? 'bg-gradient-to-b from-[#18282A] to-[#221A2C]' : 'bg-gradient-to-b from-purple-100 to-blue-100'} pb-7`}>
            <div className="text-center mt-8 md:mt-12 mb-4 flex flex-col items-center justify-center gap-4 md:gap-6">
                <h1 className={`text-3xl md:text-5xl font-extrabold mb-2 relative ${darkMode ? 'text-white' : 'text-black'}`}>
                    Collection Spotlight
                </h1>
                <p className={`text-xs md:text-sm mb-4 w-full md:w-3/4 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            </div>

            <div className="flex items-center justify-center w-full relative">
                <button
                    className={`p-1 md:p-2 text-xl md:text-2xl border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 font-bold transition-colors duration-300`}
                    style={{ flex: '0 0 8%' }}
                    onClick={handlePrevClick}
                >
                    &lt;
                </button>

                <div className="flex-1 flex justify-center items-center gap-3">
                    <div className={`hidden lg:block ${cardVisible ? 'opacity-0 transition-opacity duration-300 ease-in-out' : 'opacity-100 transition-opacity duration-300 ease-in-out'}`}>
                        <SpotlightTeamCard {...SPOTLIGHT_TEAMS[(activeCardIndex - 1) < 0 ? SPOTLIGHT_TEAMS.length - 1 : activeCardIndex - 1]} darkMode={darkMode} />
                    </div>
                    <div className={`${cardVisible ? 'opacity-0 transition-opacity duration-300 ease-in-out' : 'opacity-100 transition-opacity duration-300 ease-in-out'}`}>
                        <SpotlightTeamCard {...SPOTLIGHT_TEAMS[activeCardIndex]} darkMode={darkMode} />
                    </div>
                    <div className={`hidden md:block ${cardVisible ? 'opacity-0 transition-opacity duration-300 ease-in-out' : 'opacity-100 transition-opacity duration-300 ease-in-out'}`}>
                        <SpotlightTeamCard {...SPOTLIGHT_TEAMS[(activeCardIndex + 1) % SPOTLIGHT_TEAMS.length]} darkMode={darkMode} />
                    </div>
                </div>

                <button
                    className={`p-1 md:p-2 text-xl md:text-2xl border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 font-bold transition-colors duration-300`}
                    style={{ flex: '0 0 8%' }}
                    onClick={handleNextClick}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default SpotlightSection;
