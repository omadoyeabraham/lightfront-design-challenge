import csv
import sys

from amazon_keyword_tracker import getAmazonPageRank


# Get input and output files from the command line
if len(sys.argv) != 3:
  raise Exception("\n Please provide input and output csv file paths.")

inputFile = sys.argv[1]
outputFile = sys.argv[2]

if inputFile is None or outputFile is None or not inputFile.lower().endswith('.csv') or not outputFile.lower().endswith('.csv'):
  raise Exception("\n Please provide valid input and output csv file paths.")

with open(inputFile) as csv_file:
  csv_reader = csv.DictReader(csv_file, delimiter=',')
  line_count = 0
  response = []

  print("\n Crawling Amazon.com to get keyword page rank ... \n")

  for row in csv_reader:
      pageRank = getAmazonPageRank(row['keyword'], row['productid'])
      response.append(pageRank)
      line_count += 1

  print(f"Writing crawled data to {outputFile} ... \n")

  with open(outputFile, mode='w') as page_ranking_file:
    fieldnames = ['Productid', 'absolute_position', 'page']
    file_writer = csv.DictWriter(page_ranking_file, fieldnames=fieldnames, quotechar = "'")

    file_writer.writeheader()
    for pageRankInfo in response:
      pageRankInfo['Productid'] = row['productid']
      pageRankInfo.pop('product_found', None)
      file_writer.writerow(pageRankInfo)

  
  print(response)
  print("\n")