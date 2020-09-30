import React, { useState } from "react";
import { QueryStatus, useQuery } from "react-query";

import API_QUERIES from "../../../api/react-query.keys";
import AmazonPageRankService from "../../../api/services/amazon-page-rank.service";
import KeywordForm from "../components/keyword-form.component";
import PageRankOverTimeChart from "../components/page-rank-over-time-chart.component";

/**
 * The page for amazon page rank over time
 */
const AmazonPageRankOverTime = () => {
  const [keywords, setKeywords] = useState([]);

  const { data, status } = useQuery(
    [API_QUERIES.AMAZON_PAGE_RANK, { keywords }],
    AmazonPageRankService.getAmazonPageRankForKeyword
  );

  const handleSubmit = (keywords: any) => {
    setKeywords(keywords);
  };

  const graphDataExists =
    QueryStatus.Success && data && Object.keys(data).length > 0;

  return (
    <div className="amazon-rank-over-time-page h-full">
      <h1 className="font-bold uppercase text-3xl bg-orange-400 text-gray-800 p-4 mb-4">
        Amazon Keyword Tracking
      </h1>
      {status === QueryStatus.Success && data && (
        <div className="w-full px-8">
          {graphDataExists && <PageRankOverTimeChart dataSeries={data} />}
          {!graphDataExists && (
            <div className="h-48 text-center font-semibold text-3xl py-64 bg-gray-200 mb-24">
              Save a keyword to view keyword rank over time.
            </div>
          )}
          <KeywordForm handleSubmit={handleSubmit} keywords={keywords} />
        </div>
      )}
    </div>
  );
};

export default AmazonPageRankOverTime;
