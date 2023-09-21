import React from "react";
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart(){
    const [chartData, setChartData] = React.useState({});    

    React.useEffect(()=>{
        async function fetchGraph() {
            try {
                let data = await fetch('http://localhost:3001/user/freq');
                let resp = await data.json();
                setChartData({
                    labels: resp.data.map((userData)=> userData.day),
                    datasets: [{label: "Number of hours spent",
                                data: resp.data.map((userData)=> userData.hours)}]
                }) 
                
            } catch (error) {
                console.error(error);                
            }
                    
        }
        fetchGraph();
    },[])
    return(
        <>
        {Object.keys(chartData).length > 0 && <Bar data={chartData}/>}
        </>
    )
}