import { useState } from "react";
import { Input, Spin, Switch } from "antd";
import { IoSearchOutline } from "react-icons/io5";

import Card from "../Components/Card/Card";
import useDebounce from "../hook/useDebounce";
import Charts from "../Components/Chart/Chart";
import weatherIcon from "../assets/weather.png";
import useWeather from "../hook/useCurrentWeather";

interface DashboardProps {
  initialDarkMode?: boolean;
}

const Dashboard = ({ initialDarkMode }: DashboardProps) => {
  const [searchCity, setSearchCity] = useState("");
  const city = useDebounce(searchCity, 1000);
  const { weather, loading } = useWeather({ city });
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const [favoriteWeather, setFavoriteWeather] = useState<any>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchCity(value.trim() ? value : "");
  };

  const addToFavorites = (weatherData: any) => {
    if (!weatherData?.label) return;
    localStorage.setItem("favoriteWeather", JSON.stringify(weatherData));
    setFavoriteWeather(weatherData);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen w-full flex flex-col p-4 transition-all`}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 w-full px-4">
        <div className="flex items-center gap-2 flex-wrap">
          <img src={weatherIcon} width="80" height="80" alt="Weather Icon" />
          <h1 className="text-xl md:text-2xl font-bold">Weather</h1>
        </div>
        <div className="flex items-center w-full md:w-[500px] h-[50px] bg-white shadow-md rounded-md px-2 py-2">
          <Input
            placeholder="Search"
            className="w-full h-full flex items-center text-[15px]"
            prefix={<IoSearchOutline size={15} />}
            onChange={handleSearch}
          />
        </div>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="p-3 rounded-xl"
        />
      </div>

      {/* Add FavoritesCity data */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full px-4">
        {favoriteWeather && (
          <Card
            label={favoriteWeather?.label}
            temperature={favoriteWeather?.temperature}
            humidity={favoriteWeather?.humidity}
            windSpeed={favoriteWeather?.windSpeed}
            showFavoriteButton={false}
            weatherCondition={favoriteWeather?.weatherCondition}
          />
        )}

        {/* displaying weather data and add functionality*/}
        <Card
          label={weather?.city?.name}
          temperature={weather?.list?.[0]?.main?.temp}
          weatherCondition={weather?.list?.[0]?.weather?.[0]?.main}
          humidity={weather?.list?.[0]?.main?.humidity}
          windSpeed={weather?.list?.[0]?.wind?.speed}
          showFavoriteButton={true}
          addToFavorites={() =>
            addToFavorites({
              label: weather?.city?.name,
              temperature: weather?.list?.[0]?.main?.temp,
              weatherCondition: weather?.list?.[0]?.weather?.[0]?.main,
              humidity: weather?.list?.[0]?.main?.humidity,
              windSpeed: weather?.list?.[0]?.wind?.speed,
            })
          }
        />

        {/* chart section*/}
        <div className="bg-white w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto text-black p-4 rounded-lg shadow-md">
          <Charts weather={weather} />
        </div>
      </div>

      {/* Three  days weather data */}
      <div className="p-5 border border-gray-300 bg-white rounded-2xl w-full h-auto flex gap-8 justify-center items-center text-center shadow-md mt-8 flex-wrap">
        {loading ? (
          <Spin />
        ) : weather?.list?.length > 1 ? (
          weather.list
            .slice(1, 4)
            .map((forecast: any, index: any) => (
              <Card
                key={index}
                label={weather?.city?.name ?? "No Data"}
                temperature={forecast?.main?.temp ?? 0}
                weatherCondition={forecast?.weather?.[0]?.main}
                humidity={forecast?.main?.humidity ?? 0}
                windSpeed={forecast?.wind?.speed ?? 0}
                showFavoriteButton={false}
              />
            ))
        ) : (
          <p className="text-blue-900 font-semibold">
            Three Days Data Will Be Availabe After Searching The City
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
