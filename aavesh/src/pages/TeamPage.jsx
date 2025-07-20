import InfoCard from "../components/InfoCard";
import { prez, members } from "../Members";

const TeamPage = () => {
  const facultyCoordinator = {
    image: "/path-to-faculty-image.jpg",
    name: "Dr. Gurpreet Kaur",
    position: "Faculty Coordinator",
    email: "abc@iiitu.ac.in",
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">
        Meet Our Team
      </h1>

      {/* Faculty Coordinator Row */}
      <div className="w-full flex justify-center mb-12">
        <div className="w-full max-w-md">
          <InfoCard {...facultyCoordinator} />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-[90%] mb-6">
        <div className="h-1 bg-cyan-500"></div>
      </div>

      {/* Position Bearers Row */}
      <h2 className="text-2xl font-semibold mb-4">Position Bearers</h2>
      <div className="w-full flex flex-wrap justify-center gap-6 mb-12">
        {prez.map((admin, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
          >
            <InfoCard {...admin} />
          </div>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className="w-[90%] mb-6">
        <div className="h-1 bg-cyan-500"></div>
      </div>

      {/* Other Members Row */}
      <h2 className="text-2xl font-semibold mb-4">Other Members</h2>
      <div className="w-full flex flex-wrap justify-center gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
          >
            <InfoCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
