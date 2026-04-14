import { useEffect, useState } from "react";
import type { HistoryItem } from "../types/Weather";

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(data);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>היסטוריית חיפושים</h2>

        {history.length === 0 && <p>אין נתונים להצגה</p>}

        <button onClick={clearHistory}>נקה היסטוריה</button>

        <table>
          <tbody>
            {history.map((item, i) => (
              <tr key={i}>
                <td>{item.city}</td>
                <td>{item.country}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;