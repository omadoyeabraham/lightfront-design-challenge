import requests
import lxml
from bs4 import BeautifulSoup
from csv import writer
from selenium import webdriver


"""
  Get the amazon page rank for a product searched using a keyword

  @param | string | keyword | The keyword to search for on Amazon
  @param | string | productID | The ASIN of the product
"""


def getAmazonPageRank(keyword, productID):
    # Setup selenium driver used for webscraping
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    options.add_argument('--headless')
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    driver = webdriver.Chrome(options=options)

    current_page = 1
    absolute_position_of_keyword = 0

    url = getKeywordSearchURL(keyword, current_page)
    page = getPage(driver, url)
    search_results = getSearchResultsOnPage(page)
    product_found = False

    while nextPageExists(page):
        product_asins_in_search_results = []

        for search_result in search_results:
            product_asins_in_search_results.append(search_result['data-asin'])

        if product_asins_in_search_results.count(productID) > 0:
            product_found = True
            absolute_position_of_keyword += product_asins_in_search_results.index(
                productID)
            break
        else:
            absolute_position_of_keyword += len(
                product_asins_in_search_results)

            current_page += 1
            url = getKeywordSearchURL(keyword, current_page)
            page = getPage(driver, url)
            search_results = getSearchResultsOnPage(page)

    if product_found is False:
      current_page = 0
      absolute_position_of_keyword = 0

    return {
        "absolute_position": absolute_position_of_keyword,
        "page": current_page,
        "product_found": product_found
    }


"""
  Determine if the pagination list has an enables next button.

  @param page |  BeautifulSoup  |   Text representation of the html page
  @return boolean
"""


def nextPageExists(page):
    paginationList = page.find('ul', class_='a-pagination')
    enabledPaginationNextButton = paginationList.find(
        'li', class_="a-disabled a-last")

    return enabledPaginationNextButton is None


"""
  Get the HTML representation of a webpage

  @param | string | url | The URL of the webpage
"""


def getPage(driver, url):
    driver.get(url)
    page_source = driver.page_source
    page = BeautifulSoup(page_source, 'lxml')
    return page


"""
  Get the URL used for searching a keyword on Amazon

  @param  keyword | string | The keyword to search for on Amazon
  @param  page | integer | The page to search on
  @return string
"""


def getKeywordSearchURL(keyword, page=1):
    AMAZON_SEARCH_URL = "https://www.amazon.com/s?url=search-alias%3D&field-keywords="
    return AMAZON_SEARCH_URL + keyword + "&page=" + str(page)


"""
  Get all the search results on the search page

  @param page |  BeautifulSoup  |   Text representation of the html page
  @return List
"""


def getSearchResultsOnPage(page):
    results_grid = page.select(
        'div.s-main-slot.s-result-list.s-search-results')[0]
    return results_grid.findAll(attrs={"data-component-type": "s-search-result"})
