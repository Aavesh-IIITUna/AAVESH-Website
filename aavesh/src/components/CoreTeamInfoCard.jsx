const CoreTeamInfoCard = ({ name, position, rollNo, photourl }) => {
  return (
    <div className="group relative flex flex-col min-w-[230px] h-[350px] border-8 border-white rounded-tl-3xl rounded-br-3xl p-3 transition-transform duration-300 ease-in-out hover:scale-110 overflow-hidden">
      {/* Image */}
      <img
        src={photourl}
        alt={name}
        className="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
      />

      {/* Hover info with smooth animation */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-end px-4 
                      opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                      transition-all duration-500 ease-in-out">
        <h1 className="text-3xl text-white">{name}</h1>
        <h2 className="text-2xl text-white">{position}</h2>
        <h4 className="text-xl text-white">{rollNo}</h4>
      </div>
    </div>
  );
};

export default CoreTeamInfoCard;
