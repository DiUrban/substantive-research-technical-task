import React from "react";
import { Pie } from "react-chartjs-2";

function Percentage(props) {
  const sum = props.data2.reduce((a, b) => a + b, 0);
  const percentialArr = Array(props.data2.length);
  for (let i = 0; i < props.data2.length; i++) {
    percentialArr[i] = (props.data2[i] / sum) * 100;
  }
  console.log(percentialArr.reduce((a, b) => a + b, 0));
  console.log(percentialArr);
  const chartData = {
    labels: props.data1,
    datasets: [
      {
        label: `Percentage`,
        data: percentialArr,
      },
    ],
  };
  const options = {
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(255, 205, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(201, 203, 207, 0.2)",
    ],
    borderColor: [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(54, 162, 235)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)",
    ],
    borderWidth: 1,
    hoverOffset: 4,
    plugins: {
      legend: {},
    },
  };
  return (
    <div className="doughnut">
      <Pie data={chartData} options={options} />
    </div>
  );
}

export default Percentage;
