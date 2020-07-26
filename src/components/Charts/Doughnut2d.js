import React from "react";
import "./Doughnut2D.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);
const ChartComponent = ({ data }) => {
  // console.log(data);
  const options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
      },
    },
    title: {
      text: "Stars per Language",
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
        innerSize: 60,
        depth: 25,
        dataLabels: {
          enabled: true,
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
