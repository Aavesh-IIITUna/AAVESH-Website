
const InfoCard = ({ image, position, name, email }) => {
  return (
    <div className="bg-gray-800 text-white flex flex-col items-center justify-center py-4 px-3 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <div className="bg-gray-900 flex flex-col items-center rounded-xl shadow-md overflow-hidden w-full">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-40 sm:h-48 object-cover"
        />

        <div className="border-b-2 border-blue-500 w-full my-2"></div>

        <div className="p-4 sm:p-6 w-full text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-2">
            {name}
          </h2>
          <p className="text-gray-400 font-medium text-sm sm:text-base">
            {position}
          </p>

          <div className="border-t-2 border-gray-700 w-full my-4"></div>

          <p className="text-white-500 text-sm sm:text-base">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
