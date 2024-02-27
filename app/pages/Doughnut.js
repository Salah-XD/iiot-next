"use client"

import { useEffect } from "react"
import { Chart } from "chart.js";
function Doughnut() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        let num= 70
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Accepted", "Pending", "Rejected"],
                datasets: [{
                    data: [num,100-num],
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86,100)",
                        "rgb(255, 99, 132)",
                    ],
                    backgroundColor: [
                        "rgb(75, 192, 192 )",
                        "rgb(255, 205, 86,100)",
                        "rgb(255, 99, 132)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    aspectRatio: 1.8,
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
        });
    }, [])


    return (
        <div>
            <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Doughnut Chart</h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl w-[400px] shadow-xl pb-2'>
                    <canvas id='myChart height="40vh" width="80vw"'></canvas>
                </div>
            </div>
        </div>
    )
}

export default Doughnut;