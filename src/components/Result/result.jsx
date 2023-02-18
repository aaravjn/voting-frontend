import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from './result.module.css';

function Result({ chartData }) {

  return <>
    <div className={styles.resultcontainer}>
      <div className="chart">
        <Bar data={chartData} />;
      </div>
    </div>
  </>

}

export default Result;