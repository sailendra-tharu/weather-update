import axios from "axios";
import { useEffect, useState } from "react";

// const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const useWeather = ({ city }: { city?: string }) => {
  const API_KEY = "9f3a4c9573ec7f8244e9366d8ffcf90c";
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&cnt=32`;
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) {
        setWeather(null);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(API_URL, {
          params: { q: city, appid: API_KEY, units: "metric" },
        });

        setWeather(response.data);
      } catch (err: any) {
        setWeather(null);
        setError(err.response?.data?.message || "Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};

export default useWeather;
