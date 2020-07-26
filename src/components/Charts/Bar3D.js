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
      type: "bar",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
    },
    title: {
      text: "Popular Forks",
    },

    plotOptions: {
      column: {
        depth: 25,
      },
    },
    xAxis: {
      title: {
        text: "Repository",
      },
    },

    yAxis: {
      title: {
        text: "Forks",
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
