import { Spin } from "antd";
import React from "react";
import { Chart } from "react-charts";

interface WeatherChartsProps {
  weather: any;
}

const Charts = ({ weather }: WeatherChartsProps) => {
  console.log("weather", weather);

  if (!weather) {
    return <Spin className="flex justify-center " />;
  }

  const data = [
    {
      label: "Temperature",
      data: weather.list.map((entry: any) => ({
        date: new Date(entry.dt * 1000),
        temp: entry.main.temp,
      })),
    },
    {
      label: "Humidity",
      data: weather.list.map((entry: any) => ({
        date: new Date(entry.dt * 1000),
        temp: entry.main.humidity,
      })),
    },
    {
      label: "Wind",
      data: weather.list.map((entry: any) => ({
        date: new Date(entry.dt * 1000),
        temp: entry.wind.speed,
      })),
    },
  ];

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum: any) => datum.date,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum: any) => datum.temp,
      },
    ],
    []
  );

  return (
    <div className="p-5 border border-gray-300 rounded-2xl max-w-4xl w-full h-auto flex flex-col items-center text-center shadow-md">
      <h2 className="text-xl font-bold">Weather in {weather.city.name},</h2>
      <p className="text-lg">
        <strong>Temperature:</strong> {weather.list[0].main.temp.toFixed(2)}°C
      </p>

      {/* Chart Container */}
      <div className="w-full h-72 min-w-[280px]">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </div>
  );
};

export default Charts;
