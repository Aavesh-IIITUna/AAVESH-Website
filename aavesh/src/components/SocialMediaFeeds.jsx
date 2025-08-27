import Heading from './Heading';

export default function SocialMediaFeeds() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 md:p-8">
      <div className="flex gap-8">
        <div className="relative w-72 h-[450px] bg-gray-300 rounded-lg shadow-lg">
          <div className="p-6">
            <Heading as="h2" sizeClass="text-3xl sm:text-4xl md:text-5xl" uppercase={false} colorClass="text-black" className="font-bold">
              social media
              <br />
              feeds
            </Heading>
          </div>
        </div>
        <div className="w-72 h-[450px] bg-gray-300 rounded-lg shadow-lg">
        </div>
      </div>
    </div>
  );
}
