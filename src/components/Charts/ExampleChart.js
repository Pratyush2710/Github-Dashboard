// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = ({ data }) => {
  console.log(data);
  const options = {
    chart: {
      type: "column",
    },
    xAxis: {
      // categories: labels,
    },

    plotOptions: {
      series: {
        pointWidth: 20,
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
