
const CoreTeamInfoCard = ({ name, position, rollNo, photourl}) => {
  return (
    <>
    <div className="flex flex-col min-w-[230px] h-[294px] border border-white  rounded-tl-3xl rounded-br-3xl p-3 transition-transform duration-300 ease-in-out hover:scale-110">
      <div>
      {/* Photo to be added */}
      </div>
      <div className="relative z-10 top-36">
      <div className="text-right ">
        <h1 className="text-3xl text-white">{name}</h1>
      </div>
      <div>
        <h2 className="text-right text-2xl pr-2">{position}</h2>
        <h4 className="text-right text-xl pr-2">{rollNo}</h4>
      </div>
      </div>
    </div>
    </>
  );
};

export default CoreTeamInfoCard;
