import PixelTransition from './PixelTransition';

const CoreTeamInfoCard = ({ name, position, rollNo, photourl }) => {
  return (
    <div className="group relative flex flex-col min-w-[230px] h-[350px] border-8 border-white rounded-tl-3xl rounded-br-3xl p-3 transition-transform duration-300 ease-in-out hover:scale-110 overflow-hidden items-center justify-center">
      <PixelTransition
        firstContent={
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={photourl}
              alt={name}
              className="object-cover rounded-tl-2xl rounded-br-2xl max-h-[90%] max-w-[90%]"
              style={{ display: 'block', margin: 'auto' }}
            />
          </div>
        }
        secondContent={
          <div className="absolute inset-0 bg-black flex flex-col justify-center items-center px-4">
            <h1 className="text-3xl text-white text-center">{name}</h1>
            <h2 className="text-2xl text-white text-center">{position}</h2>
            <h4 className="text-xl text-white text-center">{rollNo}</h4>
          </div>
        }
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.4}
        className="w-full h-full"
        aspectRatio="100%"
      />
    </div>
  );
};

export default CoreTeamInfoCard;
