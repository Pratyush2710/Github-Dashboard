import React from "react";
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
