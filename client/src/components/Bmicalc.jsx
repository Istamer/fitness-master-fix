import React, {useState, useEffect} from "react";
import client from "../api";
import {useSelector} from "react-redux";
import { Line } from "react-chartjs-2";
import Chart from "./Chart";

// const Chart = ({ bmiArray }) => {
//     const data = {
//         labels: bmiArray.map((bmi) => bmi.date),
//         datasets: [
//             {
//                 label: "BMI",
//                 data: bmiArray.map((bmi) => bmi.bmi),
//                 fill: false,
//                 backgroundColor: "rgba(255, 159, 64, 0.2)",
//                 borderColor: "rgba(255, 159, 64, 1)",
//             },
//         ],
//     };
//
//     const options = {
//         scales: {
//             yAxes: [
//                 {
//                     ticks: {
//                         beginAtZero: true,
//                     },
//                 },
//             ],
//         },
//     };
//
//     return (
//         <div>
//             <Line data={data} options={options} />
//         </div>
//     );
// };

const Bmicalc = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const [bmiResult, setBmiResult] = useState(null);

    const [status, setStatus] = useState("");
    const [bmiStat, setBmiStat] = useState([]);
    const [bmiArray, setBmiArray] = useState([]);
    const [chartData, setChartData] = useState({});

    const user = useSelector(state => state.appUser.user)


    const addToBmiArray = async (userId, bmiValue) => {
        console.log(bmiValue, userId)
        await client.post(`/auth/users/${userId}/bmi`, {bmi: bmiValue})
            .then(response => {
                console.log('User with updated BMI:', response.data);
                setBmiArray(response.data.bmiStat);
            })
            .catch(error => {
                console.error(error);
            });
    }

    // const getBmiStat = async (userId) => {
    //     try {
    //         const response = await client.get(`/auth/users/${userId}/bmi`);
    //
    //         console.log("BMI stat:", response.data);
    //         setBmiStat(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const getBmiStat = async (userId) => {
        try {
            const response = await client.get(`/auth/users/${userId}/bmi`);
             const bmiData = response.data
            // .map((entry) => ({
            //     date: entry.date,
            //     bmi: entry.bmi,
            // }));
            console.log("BMI stat:", bmiData);
            setBmiStat(bmiData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (user) {
            getBmiStat(user.id);
        }
    }, [user]);

    useEffect(() => {
        const bmiData = bmiStat.map((item) => ({
            date: item.date,
            bmi: item.bmi,
        }));
        setBmiArray(bmiData);
    }, [bmiStat]);

    function calculateBMI() {
        let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);

        addToBmiArray(user.id, bmi)
        // setBmiArray(prevState => prevState.push({bmi: parseFloat(bmi), date: new Date().toLocaleString('en-us', {  weekday: 'long', month: 'long', hour: '2-digit' })}))


        let bmiStatus = getStatus(bmi);

        setStatus(bmiStatus);

        setHeight("");
        setWeight("");

        setChartData({
            labels: ["BMI"],
            datasets: [
                {
                    label: "BMI",
                    data: [bmi],
                    backgroundColor: ["rgba(255, 159, 64, 0.2)"],
                    borderColor: ["rgba(255, 159, 64, 1)"],
                    borderWidth: 1,
                },
            ],
        });
    }

    function getStatus(bmi) {
        if (bmi < 18.5) return "Underweight";
        else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
        else if (bmi >= 25 && bmi < 29.9) return "Overweight";
        else return "Obese";
    }

    return (
        <div>
        <div className="flex justify-around w-full m-10 pb-20">
            <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-[300px] h-[350px]">
                <h1 className="text-center mb-4 text-xl"> BMI Calculator</h1>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Height
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Height "
                        type="text"
                        placeholder="Height in cm"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Weight
                    </label>
                    <input
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="Weight"
                        type="Weight in kg"
                        placeholder="Weight in cm"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-[#FF7F50] hover:bg-[#FFA07A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={calculateBMI}
                    >Calculate BMI</button>
                </div>
                {bmiResult && (
                    <div className="mt-4">
                        <p>Your BMI is: {bmiResult} </p>
                        <p>You are currently: {status}</p>
                    </div>
                )}
            </form>
            <div className="block w-[1200px] p-6 bg-white shadow-lg rounded dark:bg-white h-[550px]">
                <div className="w-[1050px] pl-32"> {bmiArray.length > 0 ? <Chart bmiArray={bmiArray} />: null} </div>
            </div>
        </div>
        </div>
    );
}

export default Bmicalc