import { DEVELOPERS } from "../constants/developer";
import Footer from "../components/Footer";
import CoreTeamInfoCard from "../components/CoreTeamInfoCard";
import Heading from "../components/Heading";
import Navbar from "../components/Header";

const Developers = () => {
return (
    <>
        <div>
            <Navbar />
        </div>
        <div className="min-h-screen bg-black text-white flex flex-col justify-center p-6">
            {/* "Meet The Developers" visible only on laptop (md and up) */}
            <div className="hidden md:flex justify-center">
                <Heading
                    as="h1"
                    size="sm"
                    className="mb-8 text-center"
                >
                    Meet The Developers
                </Heading>
            </div>
            {/* "Developers" visible only on mobile (below md) */}
            <div className="flex md:hidden justify-center mb-8">
                <Heading size="sm" className="text-center">
                    Developers
                </Heading>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[82vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-8">
                    {DEVELOPERS.map((dev, idx) => (
                        <div key={idx} className="w-full max-w-sm mx-auto">
                            <CoreTeamInfoCard
                                name={dev.name}
                                position={dev.role}
                                rollNo={dev.rollNo}
                                photourl={dev.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer id="contact" />
    </>
);
};

export default Developers;
