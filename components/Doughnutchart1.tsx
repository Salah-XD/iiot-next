"use client";

import React, { useEffect } from "react";
import Chart from "chart.js";

interface Doughnutchart1Props {}

const Doughnutchart1: React.FC<Doughnutchart1Props> = () => {
  useEffect(() => {
    const ctx = (document.getElementById('myChart2') as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    let num = 70;

    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [num, 100 - num],
          borderColor: [
            "rgb(75, 192, 192)",
            "rgb(255, 205, 86,0)",
          ],
          backgroundColor: [
            "rgb(75, 192, 192 )",
            "rgb(255, 205, 86,0)",
          ],
          borderWidth: 2,
        }]
      },
      options: {
        animation: {
          onComplete: function(animation) {
            const ctx = this.chart.ctx;
            ctx.font = '20px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            const centerX = this.chart.width / 2;
            const centerY = this.chart.height / 2;

            ctx.fillText(`${num}%`, centerX, centerY);
          }
        },
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
          }],
        }
      },
    });

    return () => {
      // Cleanup or remove the chart if needed
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <div className="w-[400px] flex">
        <div className='border border-gray-200 pt-0 rounded-xl w-[400px] h-[250px] shadow-xl pb-2'>
          <canvas id='myChart2'></canvas>
        </div>
      </div>
    </div>
  );
}

export default Doughnutchart1;
