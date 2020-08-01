import React from "react";
// import "./Pie3D.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

const ChartComponent = ({ data }) => {
  // console.log(data);
  const options = {
    chart: {
      backgroundColor: "#1f1f1f",
      type: "bar",
      options3d: {
        enabled: true,
        alpha: 5,
        beta: 5,
        depth: 50,
        viewDistance: 25,
      },
    },
    legend: {
      itemStyle: {
        color: "#fff",
      },
    },
    title: {
      style: {
        color: "#fff",
        textTransform: "uppercase",
      },
      text: "<b>Popular Forks</b>",
    },

    plotOptions: {
      bar: {
        color: "#2faeba",
        depth: 25,
      },
    },
    xAxis: {
      labels: {
        style: {
          color: "#fff",
          width: "50px",
        },
        step: 1,
      },
      categories: data,
      title: {
        style: {
          color: "#fff",
        },
        text: "Repository--------------------->",
      },
      gridLineWidth: 0,
    },

    yAxis: {
      labels: {
        style: {
          color: "#fff",
          width: "50px",
        },
        step: 1,
      },
      title: {
        style: {
          color: "#fff",
        },
        text: "Forks--------------------->",
      },
      // gridLineWidth: 0,
    },
    series: [
      {
        data: data,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartComponent;
