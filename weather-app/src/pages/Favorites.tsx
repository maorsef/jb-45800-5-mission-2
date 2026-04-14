import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(data);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>מועדפים</h2>

        {favorites.length === 0 && <p>אין מועדפים עדיין</p>}

        {favorites.map((city, i) => (
          <p key={i}>{city}</p>
        ))}
      </div>
    </div>
  );
};

export default Favorites;