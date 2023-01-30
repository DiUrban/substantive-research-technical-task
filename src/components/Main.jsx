import React, { useState } from "react";
import { useSelector } from "react-redux";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import {} from "chart.js/auto";
import RadarChart from "./RadarChart";
import Percentage from "./Percentage";

function Main(props) {
  const { selection } = useSelector((store) => store.selection);
  const { interactions } = useSelector((store) => store.interactions);
  const [graphics, setGraphics] = useState("percentage");
  const countBy = (arr, prop) =>
    arr.reduce(
      (prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev),
      {}
    );
  const handleClick = (graphics) => {
    setGraphics(graphics);
  };
  let selectedInteractions;
  let proccessedInteractions = [];
  let chartData;
  if (selection === "All") {
    selectedInteractions = interactions;
    Object.values(selectedInteractions).map((item) => {
      proccessedInteractions.push(item.length);
    });
    chartData = {
      labels: Object.keys(selectedInteractions),
      datasets: [
        {
          label: "Sector Interactions",
          data: proccessedInteractions,
        },
      ],
    };
  } else {
    selectedInteractions = interactions[selection];
    proccessedInteractions = countBy(selectedInteractions, "date");
    chartData = {
      labels: Object.keys(proccessedInteractions),
      datasets: [
        {
          label: `${selection} Interactions`,
          data: Object.values(proccessedInteractions),
        },
      ],
    };
  }
  return (
    <div className="mainBody">
      <div className="topbar">
        {selection === "All" ? (
          <button className="button" onClick={() => handleClick("percentage")}>
            percentage
          </button>
        ) : (
          ""
        )}
        <button className="button" onClick={() => handleClick("doughnut")}>
          doughnut
        </button>
        <button className="button" onClick={() => handleClick("chart")}>
          chart
        </button>
        <button className="button" onClick={() => handleClick("radar")}>
          radar
        </button>
      </div>
      <div className="body">
        <div className="graphicsWrapper">
          {graphics === "doughnut" ? (
            <DoughnutChart data={chartData} />
          ) : graphics === "chart" ? (
            <BarChart data={chartData} />
          ) : graphics === "radar" ? (
            <RadarChart data={chartData} />
          ) : graphics === "percentage" && selection === "All" ? (
            <Percentage
              data1={Object.keys(selectedInteractions)}
              data2={proccessedInteractions}
            />
          ) : graphics === "percentage" && selection !== "All" ? (
            setGraphics("doughnut")
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
