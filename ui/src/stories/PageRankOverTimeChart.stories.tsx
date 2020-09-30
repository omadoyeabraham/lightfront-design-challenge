import React from "react";
import { action } from "@storybook/addon-actions";

import PageRankOverTimeChart from "../modules/pagerank/components/page-rank-over-time-chart.component";
import AmazonPageRankService from "../api/services/amazon-page-rank.service";

export default {
  title: "PageRankOverTimeChart",
  component: PageRankOverTimeChart,
  excludeStories: /.*Data$/,
};

export const actionsData = {
  handleSubmit: action("handleSubmit"),
};

export const Default = () => {
  let chartData = AmazonPageRankService.getTestAmazonPageRankForKeyword("", "");
  return <PageRankOverTimeChart dataSeries={chartData} />;
};
