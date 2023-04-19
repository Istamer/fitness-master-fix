import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ bmiArray }) => {
console.log(bmiArray)
    // Определяем данные для графика
    const data = {
        labels: bmiArray.map((bmi) => {const currDate = new Date(bmi.date).toLocaleString('en-us', {  weekday: 'long', month: 'long', hour: '2-digit' }); return currDate}),
        datasets: [
            {
                label: "BMI",
                data: bmiArray.map((bmi) => bmi.bmi), // значение BMI передается как массив данных для графика
                fill: false,
                backgroundColor: "rgb(255,85,0)",
                borderColor: "rgb(252,128,49)",
            },
        ],
    };

    // Определяем параметры для графика
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className="w-full h-full">
            <h2>График BMI</h2>
            <Line data={data} options={options} />
        </div>
    )
}

export default Chart;

