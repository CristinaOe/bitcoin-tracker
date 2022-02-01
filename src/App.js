import "./styles/App.css";
import { useEffect, useState } from "react";
import { BarChart } from "./components/Chart";

export default function App() {
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5");
      const data = await res.json();
      console.log(data.data);
      setChartData({
        labels: data.data.map((crypto) => crypto.name),
        datasets: [
          {
            label: "Price in USD",
            data: data.data.map((crypto) => crypto.priceUsd),
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
          },
        ],
      });
    };
    fetchPrices();
  }, []);

  const [chartData, setChartData] = useState({});

  return (
    <div className='App'>
      {" "}
      <BarChart chartData={chartData} />
    </div>
  );
}
