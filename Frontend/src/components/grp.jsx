import React, { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import "./App.css";

import revenueData from "./data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const generateRandomData = () => {
  return {
    label: `Label ${Math.floor(Math.random() * 100)}`,
    revenue: Math.floor(Math.random() * 100000),
  };
};

export const App = () => {
    const [chartData1, setChartData1] = useState({
      labels: [],
      datasets: [
        {
          label: "Revenue",
          data: revenueData.map((data) => data.revenue),
          backgroundColor: "#064FF0",
          borderColor: "#064FF0",
        },
      ],
    });
  
    const [chartData2, setChartData2] = useState({
      labels: [],
      datasets: [
        {
          label: "Avenue",
          data: revenueData.map((data) => data.revenue),
          backgroundColor: "#FF0000",
          borderColor: "#FF0000",
        },
      ],
    });
  
    const [chartData3, setChartData3] = useState({
      labels: [],
      datasets: [
        {
          label: "Abhimanyu",
          data: revenueData.map((data) => data.revenue),
          backgroundColor: "#45FF00",
          borderColor: "#45FF00",
        },
      ],
    });
  


    useEffect(() => {
        const interval = setInterval(() => {
          const newData = generateRandomData();
    
          setChartData1((prevChartData) => {
            const updatedLabels = [...prevChartData.labels, newData.label].slice(-10);
            const updatedData = [...prevChartData.datasets[0].data, newData.revenue].slice(-10);
    
            return {
              labels: updatedLabels,
              datasets: [
                {
                  ...prevChartData.datasets[0],
                  data: updatedData,
                },
              ],
            };
          });
    
          setChartData2((prevChartData) => {
            const updatedLabels = [...prevChartData.labels, newData.label].slice(-10);
            const updatedData = [...prevChartData.datasets[0].data, newData.revenue].slice(-10);
    
            return {
              labels: updatedLabels,
              datasets: [
                {
                  ...prevChartData.datasets[0],
                  data: updatedData,
                },
              ],
            };
          });
    
          setChartData3((prevChartData) => {
            const updatedLabels = [...prevChartData.labels, newData.label].slice(-10);
            const updatedData = [...prevChartData.datasets[0].data, newData.revenue].slice(-10);
    
            return {
              labels: updatedLabels,
              datasets: [
                {
                  ...prevChartData.datasets[0],
                  data: updatedData,
                },
              ],
            };
          });
        }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="dataCard revenueCard">
        <Line
          data={chartData1}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "CPU Usage 1",
              },
            },
          }}
        />
      </div>
      <div className="dataCard revenueCard">
        <Line
          data={chartData2}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "CPU Usage 2",
              },
            },
          }}
        />
      </div>
      <div className="dataCard revenueCard">
        <Line
          data={chartData3}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "CPU Usage 3",
              },
            },
          }}
        />
      </div>
    </div>
    
  );
};