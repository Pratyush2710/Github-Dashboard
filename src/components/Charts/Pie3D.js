import React from "react";
// import "./defaultTheme.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);
// Set custom colors to Pie3D
// Highcharts.setOptions({
// colors: ["#50B432","#ED561B","#DDDF00","#24CBE5","#64E572","#FF9655","#FFF263","#6AF9C4",],});
const ChartComponent = ({ data }) => {
  const options = {
    chart: {
      backgroundColor: "#1f1f1f",
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
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
      text: "<b>Languages</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat: " <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 65,
        dataLabels: {
          enabled: false,
          // format: "{point.name}: <b>{point.percentage:.1f}%",
        },
        borderWidth: 0,
        showInLegend: true,
      },
      series: {
        point: {
          //disable series to disappear
          events: {
            legendItemClick: function () {
              return false; // <== returning false will cancel the default action
            },
          },
        },
      },
    },
    series: [
      {
        type: "pie",
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
