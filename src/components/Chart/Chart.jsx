import React, { useState, useEffect } from 'react';
import { fetchDailyChartData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data, country }) => {
    const [dailyChartData, setDailyChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setDailyChartData(await fetchDailyChartData()); 
        }

        fetchData();
    }, []);

    const barChart = (
        data.confirmed ?
        (<Bar data={{
            labels:["Infected", "Recovered", "Deaths"],
            datasets: [{
                lable: "People",
                backgroundColor: [
                    "rgba(0, 0 ,255, 0.5)",
                    "rgba(0, 255 ,0, 0.5)",
                    "rgba(255, 0 ,0, 0.5)"
                ],
                data:[data.confirmed.value, data.recovered.value, data.deaths.value],
            }]
        }} options={{
            legend: { display: false },
            title: { display: true, text: `Current State in ${country}`}
        }}></Bar>) : null
    );

    const lineChart = (
        dailyChartData[0] ? (
            <Line
              data={{
                labels: dailyChartData.map(({ date }) => date),
                datasets: [{
                  data: dailyChartData.map((data) => data.confirmed),
                  label: 'Infected',
                  borderColor: '#3333ff',
                  fill: true,
                }, {
                  data: dailyChartData.map((data) => data.deaths),
                  label: 'Deaths',
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  fill: true,
                },
                ],
              }}
            />
          ) : null
    );

    return (
        <div className={styles.container}>
            {(country && country !== 'global') ? barChart: lineChart}
        </div>
    )
}

export default Chart;