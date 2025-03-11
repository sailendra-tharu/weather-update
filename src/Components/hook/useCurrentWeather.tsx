import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "9f3a4c9573ec7f8244e9366d8ffcf90c";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?";

const useWeather = ({ city }: { city: string }) => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!API_URL || !API_KEY) {
        setError("Missing API URL or API Key.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        const response = await axios.get(API_URL, {
          params: { q: city, appid: API_KEY, units: "metric" },
        });

        setWeather(response.data);
      } catch (err) {
        setError("API request failed");
      } finally {
        setLoading(false);
      }
    };

    if (city) fetchWeather();
  }, [city]);

  return { weather, loading, error };
};

export default useWeather;
