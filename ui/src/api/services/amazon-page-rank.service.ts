// Shape of an individual response object expected from the API
export interface I_PageRankResponse {
  keyword: string;
  product_id: string;
  page_rank: number;
  price: number;
  orders: number;
  date: number;
}

const KEYWORDS = ["headphones"];
const PRODUCT_ID = "B079B54QM2";

export default class AmazonPageRankService {
  /**
   * Generate random page rank data for a keyword + product id combination
   *
   * @param keyword
   * @param productID
   */
  static generateRandomPageRankData(
    keyword: string,
    productID: string
  ): Array<I_PageRankResponse> {
    let data: Array<I_PageRankResponse> = [];

    const base = Math.floor(50 + Math.random() * 500);

    for (let i = 0; i < 1000; i++) {
      data.push({
        keyword,
        product_id: productID,
        page_rank: Math.round(Math.floor(base + Math.random() * 50)),
        price: Math.floor(Math.random() * 1200),
        orders: Math.round(Math.floor(Math.random() * 2000)),
        date: randomDate(new Date(2012, 0, 1), new Date()).getTime(),
      });
    }

    data = data.sort((a, b) => a.date - b.date);

    return data;
  }

  /**
   * Get the Amazon page rank of a keyword
   */
  static async getAmazonPageRankForKeyword(
    key: string,
    { keywords }: { keywords: string[] },
    productID: string
  ): Promise<{ [key: string]: I_PageRankResponse[] }> {
    let data: { [key: string]: I_PageRankResponse[] } = {};
    keywords.forEach((keyword) => {
      const keywordData = AmazonPageRankService.generateRandomPageRankData(
        keyword,
        PRODUCT_ID
      );
      data[keyword] = keywordData;
    });

    return data;
  }

  /**
   * Get the test Amazon page rank of a keyword.
   * This is used by storybook
   */
  static getTestAmazonPageRankForKeyword(
    keyword: string,
    productID: string
  ): { [key: string]: I_PageRankResponse[] } {
    let data: { [key: string]: I_PageRankResponse[] } = {};
    KEYWORDS.forEach((keyword) => {
      const keywordData = AmazonPageRankService.generateRandomPageRankData(
        keyword,
        PRODUCT_ID
      );
      data[keyword] = keywordData;
    });

    return data;
  }
}

/**
 * Generate a randomDate
 * @param start
 * @param end
 */
function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
