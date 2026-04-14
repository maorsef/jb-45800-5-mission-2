const API_KEY = "8ec4c21b217749e88e5145154261304";

export const getWeather = async (city: string) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );
  return res.json();
};