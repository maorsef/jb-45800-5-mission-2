import { useEffect, useState } from "react";
import { getCities } from "../api/citiesApi";
import { getWeather } from "../api/weatherApi";

const Home = () => {
  const [cities, setCities] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getCities().then(setCities);
  }, []);

  const filtered = cities.filter((c: any) =>
    c.city_name_he?.includes(search)
  );

  const handleSelect = async (city: string) => {
    try {
      setError("");
      const data = await getWeather(city);

      // בדיקה שהמידע תקין
      if (!data || !data.location || !data.current) {
        throw new Error("API error");
      }

      setWeather(data);

      const history = JSON.parse(localStorage.getItem("history") || "[]");
      history.push({
        city: data.location.name,
        country: data.location.country,
        date: new Date().toLocaleString(),
      });
      localStorage.setItem("history", JSON.stringify(history));

    } catch (err) {
      setError("שגיאה בטעינת הנתונים");
      setWeather(null);
    }
  };

  const addFavorite = () => {
    if (!weather) return;

    const fav = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (!fav.includes(weather.location.name)) {
      fav.push(weather.location.name);
      localStorage.setItem("favorites", JSON.stringify(fav));
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 style={{ textAlign: "center" }}>בדיקת מזג אוויר</h2>

        <input
  placeholder="חפש עיר..."
  value={search}
  onChange={(e) => {
    const value = e.target.value;
    setSearch(value);

    const match = cities.find((c: any) =>
      c.name_he === value
    );

    if (match) {
      handleSelect(value);
    }
  }}
/>

        <select onChange={(e) => handleSelect(e.target.value)}>
          <option>בחר עיר</option>
          {filtered.slice(0, 50).map((c: any, i: number) => (
            <option key={i} value={c.city_name_en}>
              {c.city_name_he}
            </option>
          ))}
        </select>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!weather && !error && <p>בחר עיר כדי לראות נתונים</p>}

        {weather && (
          <div className="weather">
            <h3>
              {weather.location.name}, {weather.location.country}
            </h3>

            <img src={"https:" + weather.current.condition.icon} />

            <p>{weather.current.temp_c}°C</p>

            <p>{weather.current.condition.text}</p>

            <p>מהירות רוח: {weather.current.wind_kph} קמ״ש</p>

            <button onClick={addFavorite}>הוסף למועדפים</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;