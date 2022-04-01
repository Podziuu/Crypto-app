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
} from "chart.js";

const CryptoChart = (props) => {
  const coinHistory = [];
  const timeStamps = [];

  for (let i = props.coinHistory.data.history.length - 1; i > -1; i--) {
    coinHistory.push(props.coinHistory.data.history[i].price);
  }

  for (let i = props.coinHistory.data.history.length - 1; i > -1; i--) {
    timeStamps.push(
      new Date(
        props.coinHistory.data.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
  }

  // let i = 0; i < props.coinHistory.data.history.length; i++

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const totalDuration = 1500;
  const delayBetweenPoints = totalDuration / coinHistory.length;
  const previousY = (ctx) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(["y"], true).y;
  const animation = {
    x: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        if (ctx.type !== "data" || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== "data" || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  };

  const data = {
    labels: timeStamps,
    datasets: [
      {
        label: "Price In USD",
        data: coinHistory,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    animation,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${props.coinName} Chart`,
      },
    },
  };

  return (
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default CryptoChart;
