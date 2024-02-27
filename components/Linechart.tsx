"use client"

import React, { useEffect } from "react";
import Chart from "chart.js";

interface LinechartProps {}

const Linechart: React.FC<LinechartProps> = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart')?.getContext('2d') as CanvasRenderingContext2D;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Applied",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          // data: [70, 90, 44, 60, 83, 90, 100],
          // label: "Accepted",
          // borderColor: "#3cba9f",
          // backgroundColor: "#71d1bd",
          // fill: false,
        }, {
          // data: [10, 21, 60, 44, 17, 21, 17],
          // label: "Pending",
          // borderColor: "#ffa500",
          // backgroundColor: "#ffc04d",
          // fill: false,
        }, {
          // data: [6, 3, 2, 2, 7, 0, 16],
          // label: "Rejected",
          // borderColor: "#c45850",
          // backgroundColor: "#d78f89",
          // fill: false,
        }]
      },
    });
  }, []);

  return (
    <div>
      <div className="w-[400px] flex">
        <div className='border border-gray-200 pt-0 rounded-xl w-[400px] h-[250px] shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </div>
  );
};

export default Linechart;
