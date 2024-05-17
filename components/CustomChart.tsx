"use client";

import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Title,
  Tooltip,
  Legend
);

const getXValues = (from: number, to: number, step = 1) => {
  const xValues = [];
  for (let i = from; i <= to; i += step) {
    xValues.push(i);
  }
  return xValues;
};

const CustomChart = () => {
  const data = {
    labels: getXValues(0, 6),
    datasets: [
      {
        label: "aboba chart",
        data: [50, 100, 30, 40, 45, 90],
        borderColor: "teal",
      },
    ],
  };
  const optinos = {};
  const chartRef = useRef(null);
  if (chartRef == null) return <div>Loading...</div>;
  return (
    <Chart
      ref={chartRef}
      type="line"
      data={data}
      onClick={(event) => {
        const dataset = getDatasetAtEvent(chartRef.current!, event);
        const element = getElementAtEvent(chartRef.current!, event);
        const elements = getElementsAtEvent(chartRef.current!, event);
        if (element[0] == undefined) {
          return;
        }
        const { datasetIndex, index } = element[0];
        console.log("@", data.datasets[datasetIndex].data[index]);
      }}
    />
  );
};

export default CustomChart;
