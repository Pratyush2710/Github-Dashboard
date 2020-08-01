import React from "react";
// import "./Doughnut2D.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);
const ChartComponent = ({ data }) => {
  // console.log(data);
  const options = {
    chart: {
      backgroundColor: "#1f1f1f",
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
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
      text: "<b>Stars per Language</b>",
    },
    // accessibility: {
    //   point: {
    //     // valueSuffix: "%",
    //   },
    // },
    // tooltip: {
    //   pointFormat: " <b>{point.percentage:.1f}%</b>",
    // },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        innerSize: 80,
        depth: 65,
        dataLabels: {
          enabled: false,
          format: "{point.name}:{point.y}",
        },
        showInLegend: true,
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
