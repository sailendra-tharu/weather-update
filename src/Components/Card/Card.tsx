import { IoSunnyOutline } from "react-icons/io5";
import { WiCloud, WiRain } from "react-icons/wi";

interface WeatherCardProps {
  label: string;
  temperature: number;
  weatherCondition: string;
  humidity: number;
  windSpeed: number;
  showFavoriteButton: boolean;
  addToFavorites?: () => void;
}

const Card = ({
  label,
  temperature,
  weatherCondition,
  humidity,
  windSpeed,
  showFavoriteButton,
  addToFavorites,
}: WeatherCardProps) => {
  console.log(label, "label");
  const weatherIcons: { [key: string]: JSX.Element } = {
    Clear: <IoSunnyOutline size={30} color="orange" />,
    Clouds: <WiCloud size={30} color="gray" />,
    Rain: <WiRain size={30} color="blue" />,
  };

  return (
    <div className="flex flex-col rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg w-full max-w-md p-6 text-white cursor-pointer min-h-[400px]">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-2xl">
          {weatherIcons[weatherCondition] || ""}
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl font-semibold">{label}</h1>
          <h2 className="text-4xl md:text-5xl font-bold">{temperature}°C</h2>
        </div>
      </div>

      <div className="flex flex-col mt-8 gap-4">
        <div className="flex justify-between border-b border-white/30 pb-2">
          <span className="text-base md:text-lg">Humidity</span>
          <span className="text-base md:text-lg font-medium">{humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-base md:text-lg">Wind Speed</span>
          <span className="text-base md:text-lg font-medium">
            {windSpeed} km/h
          </span>
        </div>
      </div>
      {showFavoriteButton && (
        <button
          className="mt-8 md:mt-20 bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          onClick={addToFavorites}
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default Card;
