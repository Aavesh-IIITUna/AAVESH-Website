import CoreTeamInfoCard from "../components/CoreTeamInfoCard";
import TeamInfoCard from "../components/TeamInfoCard";
import { CoreTeam, Team } from "../Members";
import Navbar from "../components/Header";
import Heading from "../components/Heading";

// Temporary hardcoded Faculty data (can move to Members.js)
const facultyCoordinator = {
  name: "Dr. Gurpreet Kaur",
  position: "Faculty Coordinator",
  rollNo: "Faculty SOE",
  photourl: "/gk.webp", // make sure this image exists
};

const TeamPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="w-full m-auto">
        <div className="min-h-screen bg-black text-white flex flex-col p-6">
          
          {/* 🧑‍🏫 Faculty Coordinator Section */}
          <Heading as="h1" size="md" className="mb-8 ml-28">FACULTY COORDINATOR</Heading>
          <div className="w-full flex justify-center mb-12">
            <div className="w-full max-w-sm m-auto">
              <CoreTeamInfoCard {...facultyCoordinator} />
            </div>
          </div>

          {/* 👥 Core Team Section */}
          <Heading as="h1" size="md" className="mb-8 ml-28">CORE TEAM</Heading>
          <div className="w-full flex justify-center">
            <div className="w-[82vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-8">
              {CoreTeam.map((admin, index) => (
                <div key={index} className="w-full max-w-sm m-auto">
                  <CoreTeamInfoCard {...admin} />
                </div>
              ))}
            </div>
          </div>

          {/* 🧑‍💻 Team Section */}
          <Heading as="h1" size="md" className="mb-8 ml-28">TEAM</Heading>
          <div className="w-full flex justify-center">
            <div className="w-[82vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-8">
              {Team.map((admin, index) => (
                <div key={index} className="w-full max-w-sm m-auto">
                  <TeamInfoCard {...admin} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default TeamPage;
