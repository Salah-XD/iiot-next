"use client"

import { useEffect } from "react"
import { Chart } from "chart.js";
function Doughnutchart2() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        let num= 70
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ["Accepted", "Pending", "Rejected"],
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
            <div className="w-[1100px] flex p-5">
                <div className='border border-gray-200 pt-0 rounded-xl w-[400px] h-[250px] shadow-xl pb-2'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </div>
    )
}

export default Doughnutchart2;