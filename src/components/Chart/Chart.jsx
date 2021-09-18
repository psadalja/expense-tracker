import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar value={dataPoints.value} />
      ))}
    </div>
  );
};

export default Chart;
