import React from "react";
import "./Pie3D.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

const ChartComponent = ({ data }) => {
  // console.log(data);
  const options = {
    chart: {
      type: "column",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
    },
    title: {
      text: "Popular Repository",
    },

    plotOptions: {
      column: {
        depth: 25,
      },
    },
    xAxis: {
      categories: data,
      gridLineWidth: 0,
      title: {
        text: "Repository",
      },
    },

    yAxis: {
      // gridLineWidth: 0,
      title: {
        text: "Stars",
      },
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
