const TeamInfoCard = ({ name, rollNo, role }) => {
  return (

    <div className="relative mt-5 w-full max-w-xs transition-transform duration-300 ease-in-out hover:scale-110">

    {/* condition to be added for which border color to div will be assigned according to the role */}
      <div className="absolute -top-5 -right-0 bg-red-900 text-white px-4 z-10">
        <h3 className="text-sm tracking-wider lowercase">{role}</h3>
      </div>

      <div className="flex flex-col h-[84px] border-2 border-red-900 rounded-tl-3xl rounded-br-3xl p-3 bg-[linear-gradient(to_right,#000000,#1e1e1e,#363636,#505050,#6b6b6b,#6b6b6b,#6b6b6b,#6b6b6b,#505050,#363636,#1e1e1e,#000000)]">
        <div className="pl-4">
          <h1 className="text-xl text-white">{name}</h1>
          <h4 className="text-xl pr-2">{rollNo}</h4>
        </div>
      </div>
    </div>
  );
};

export default TeamInfoCard;