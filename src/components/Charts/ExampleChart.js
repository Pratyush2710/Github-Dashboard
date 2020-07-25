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

const options = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Historic World Population by Region",
  },
  subtitle: {
    text:
      'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>',
  },
  xAxis: {
    categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Population (millions)",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
  },
  tooltip: {
    valueSuffix: " millions",
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
    shadow: true,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Year 1800",
      data: [107, 31, 635, 203, 2],
    },
    {
      name: "Year 1900",
      data: [133, 156, 947, 408, 6],
    },
    {
      name: "Year 2000",
      data: [814, 841, 3714, 727, 31],
    },
    {
      name: "Year 2016",
      data: [1216, 1001, 4436, 738, 40],
    },
  ],
};

const ChartComponent = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartComponent;
