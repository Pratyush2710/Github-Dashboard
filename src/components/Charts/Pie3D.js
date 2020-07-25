import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);
Highcharts.setOptions({
  colors: [
    "#50B432",
    "#ED561B",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4",
  ],
});
const ChartComponent = ({ data }) => {
  // console.log(data);
  const options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: "Languages",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat: " <b>{point.percentage:.1f}%</b>",
      // {series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 25,
        dataLabels: {
          enabled: true,
          format: "{point.name}: <b>{point.percentage:.1f}%",
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
