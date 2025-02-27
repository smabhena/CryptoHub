import React from "react";
import { useState, useEffect } from "react";
import { HeartIcon, ChatIcon } from "@heroicons/react/outline";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const CoinInfoNext = ({ id, name, state, arrow }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        backgroundColor: ["rgb(99 102 241)"],
        // backgroundColor: ["rgb(99 102 241)"],
      },
    ],
  });

  const getCoinHistory = () => {
    const options = {
      method: "GET",
    };

    fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`, options)
      .then((response) => response.json())
      .then((data) => {
        let fetched = [];
        fetched.push(data.data);
        let f = [];
        f = fetched[0];
        f = f.reverse();
        let final = f.slice(0, 10);
        let rawDates = final.map((item) => item.date);
        let dates = rawDates.reverse().map((item) => item.slice(5, 10));
        let prices = final.reverse().map((item) => item.priceUsd);
        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Price over the past 10 days",
              data: prices,
              backgroundColor: ["rgb(99 102 241)"],
            },
          ],
        });
      });
  };

  useEffect(() => {
    getCoinHistory();
  }, []);

  return (
    <div className="bg-white m-4 p-4 rounded-lg w-full">
      <div className="flex flex-col mb-2">
        <div className="flex flex-row justify-between">
          <p className="text-xl font-semibold mb-2 translate-y-1 ml-2 text-center">
            {name}
          </p>
          {/* <div className="flex flex-row justify-between">
            <button className="text-sm font-semibold mb-2 translate-y-1 ml-1 text-right bg-gray-100 px-3 p-1 rounded-md hover:bg-indigo-300 transition">
              1 day
            </button>
            <button className="text-sm font-semibold mb-2 translate-y-1 ml-1 text-right bg-gray-100 px-3 p-1 rounded-md hover:bg-indigo-300 transition">
              1 week
            </button>
            <button className="text-sm font-semibold mb-2 translate-y-1 ml-1 text-right bg-gray-100 px-3 p-1 rounded-md hover:bg-indigo-300 transition">
              1 month
            </button>
          </div> */}
        </div>
        <div className="flex flex-row">
          <p className="text-2xl font-bold mb-2 translate-y-1 ml-2 justify-between">
            {state}
          </p>
          {arrow == "up" ? (
            <div className="h-0 w-4.5 border-x-8 border-x-transparent translate-y-3 translate-x-2 border-b-[15px] border-b-green-600"></div>
          ) : (
            <div className="h-0 w-4.5 border-x-8 border-x-transparent translate-y-4 translate-x-2 border-b-[15px] border-b-red-600 rotate-180"></div>
          )}
        </div>
        <div>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default CoinInfoNext;
