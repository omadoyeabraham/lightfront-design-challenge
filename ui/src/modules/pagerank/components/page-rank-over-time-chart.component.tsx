import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { I_PageRankResponse } from "../../../api/services/amazon-page-rank.service";

interface I_PageRankOverTimeChartProps {
  dataSeries: { [key: string]: I_PageRankResponse[] };
}

/**
 * Chart displaying page rankings over time
 */
const PageRankOverTimeChart = (props: I_PageRankOverTimeChartProps) => {
  let series: any = [];
  Object.keys(props.dataSeries).map((key: any, index: number) => {
    series.push({
      name: `Ranking`,
      data: props.dataSeries[key].map((entry) => [entry.date, entry.page_rank]),
    });

    if (index === 0) {
      series.push({
        name: `Orders`,
        yAxis: 1,
        data: props.dataSeries[key].map((entry) => [entry.date, entry.orders]),
      });

      series.push({
        name: `Price`,
        yAxis: 2,
        data: props.dataSeries[key].map((entry) => [entry.date, entry.price]),
      });
    }
  });

  const options = {
    chart: {
      height: 800,
    },
    title: {
      text: "Amazon Rankings",
    },

    yAxis: [
      {
        title: {
          text: "Ranking",
          offset: 70,
        },
        labels: {
          align: "left",
        },
        height: "50%",
        lineWidth: 2,
        gridLineWidth: 1,
      },
      {
        title: {
          text: "Orders",
          offset: 70,
        },
        labels: {
          align: "left",
        },
        top: "52%",
        height: "23%",
        offset: 1,
        lineWidth: 2,
      },
      {
        title: {
          text: "Price",
          offset: 70,
        },
        labels: {
          align: "left",
        },
        top: "77%",
        height: "23%",
        offset: 1,
        lineWidth: 2,
      },
    ],
    xAxis: {
      gridLineWidth: 1,
    },
    legend: {
      enabled: true,
      align: "right",
      layout: "vertical",
      verticalAlign: "middle",
    },
    series,
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"stockChart"}
      />
    </div>
  );
};

export default PageRankOverTimeChart;
