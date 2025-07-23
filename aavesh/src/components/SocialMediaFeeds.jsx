
export default function SocialMediaFeeds() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 md:p-8">
      
      {/* --- Main container for the two panels --- */}
      <div className="flex gap-8">

        {/* --- Left Panel --- */}
        <div className="relative w-72 h-[450px] bg-gray-300 rounded-lg shadow-lg">
          {/* Text inside the panel */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-black">
              social media
              <br />
              feeds
            </h2>
          </div>
        </div>

        {/* --- Right Panel --- */}
        <div className="w-72 h-[450px] bg-gray-300 rounded-lg shadow-lg">
          {/* This panel is empty as per the design */}
        </div>

      </div>
      
    </div>
  );
}
