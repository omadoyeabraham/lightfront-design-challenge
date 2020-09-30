from flask import Flask, request, jsonify
from selenium import webdriver

from amazon_keyword_tracker import getAmazonPageRank

app = Flask(__name__)

"""
 API Route to get the amazon keyword page rank for a keyword + product ID combination
"""
@app.route('/amazon-keyword-page-rank/', methods=['GET'])
def keywordPageRank():
    params = request.args
    pageRank = getAmazonPageRank(
        params['keyword'], params['product_id'])
    return jsonify(pageRank)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)
