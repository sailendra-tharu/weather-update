import { IoSunnyOutline } from "react-icons/io5"; 
import { WiCloud, WiRain } from "react-icons/wi"; 

interface WeatherCardProps {
  label: string;
  temperature: number;
  weatherCondition: string;
  humidity: number;
  windSpeed: number;
}

const Card = ({
  label,
  temperature,
  weatherCondition,
  humidity,
  windSpeed,
}: WeatherCardProps) => {

  
  const weatherIcons: any = {
    Clear: <IoSunnyOutline size={30} color="orange" />,
    Cloudy: <WiCloud size={30} color="gray" />,
    Rain: <WiRain size={30} color="blue" />,
  };

  return (
    <div className="flex flex-col rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg w-[500px] h-[400px] p-6 text-white cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-2xl">
          {weatherIcons[weatherCondition] || ""}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">{label}</h1>
          <h2 className="text-5xl font-bold">{temperature}°C</h2>
        </div>
      </div>

      <div className="flex flex-col mt-8 gap-4">
        <div className="flex justify-between border-b border-white/30 pb-2">
          <span className="text-lg">Humidity</span>
          <span className="text-lg font-medium">{humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg">Wind Speed</span>
          <span className="text-lg font-medium">{windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
