import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          id={dataPoints.label}
          value={dataPoints.value}
          label={dataPoints.label}
          maxValue={null}
        />
      ))}
    </div>
  );
};

export default Chart;
