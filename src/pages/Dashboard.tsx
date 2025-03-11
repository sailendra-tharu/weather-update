import { useState } from "react";
import { Input, Switch } from "antd";
import { IoSearchOutline } from "react-icons/io5";

import Card from "../Components/Card/Card";
import weatherIcon from "../assets/weather.png";
import useWeather from "../Components/hook/useCurrentWeather";

interface DashboardProps {
  initialDarkMode?: boolean;
}

const Dashboard = ({ initialDarkMode }: DashboardProps) => {
  const [city, setCity] = useState("");
  const { weather } = useWeather({ city });
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const weatherCondition = weather?.weather?.map(
    (weatherCondition: any) => weatherCondition?.main
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value.trim() ? value : "");
  };

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen w-full flex flex-col p-4 transition-all`}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <img src={weatherIcon} width="80" height="80" alt="Weather Icon" />
          <h1 className="text-[20px]">Weather</h1>
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

      {/* Weather Card Section */}
      <div className="flex justify-center items-center px-4 sm:px-8 md:px-16">
        <Card
          label={weather?.name}
          temperature={weather?.main?.temp}
          weatherCondition={weatherCondition}
          humidity={weather?.main?.humidity}
          windSpeed={weather?.wind?.speed}
        />
      </div>
    </div>
  );
};

export default Dashboard;