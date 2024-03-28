import TeamCard from "@/components/TeamsComponent/TeamCard/TeamCard";
import { TEAMS } from "@/constants/teams";

interface TeamsSectionProps {
    darkMode: boolean;
}

const TeamsSection: React.FC<TeamsSectionProps> = ({ darkMode }) => {
    return (
        <section>
            <div className="mb-7">
                <h1 className="text-lg md:text-xl font-extrabold inline-block relative">
                    Sports
                    <div className="absolute top-8 bottom-0 left-0 w-full h-[2px] bg-blue-500"></div>
                </h1>
            </div>

            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-3 md:gap-x-2">
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

            <div className="flex justify-center mt-8">
                <button className={`text-sm md:text-md xl:text-lg px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300`}>
                    See More
                </button>
            </div>
        </section>
    );
};

export default TeamsSection;
