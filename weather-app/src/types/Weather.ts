export interface City {
  city_name_en: string;
  name_he?: string;
  city_name_he?: string;
  // add other fields as needed
}

export interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
  };
  location: {
    name: string;
    country: string;
  };
  // add other fields
}

export interface HistoryItem {
  city: string;
  country: string;
  date: string;
}

export const getWeather = async (city: string) => {
  const API_KEY = "8ec4c21b217749e88e5145154261304";

  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = await res.json();
  return data;
};