/* eslint-disable prefer-const */
import { fetch } from 'cheerio-httpcli';

const bookCrawler = (url) => {
  fetch(url, (err, $, res, body) => {
    let result = [];
    let tempTitle;

    $('div#category_layout ul li').each((i, elem) => {
      tempTitle = $(elem).find('div.goods_name a').text();
      if (tempTitle) {
        result.push({
          title: tempTitle,
          author: $(elem).find('div.goods_pubGrp span.goods_auth a').text(),
          publish: $(elem).find('div.goods_pubGrp span.goods_pub').text(),
          price: $(elem).find('div.goods_price em').text(),
        });
      }
    });

    for (let i = 0; i < result.length; i += 1) {
      console.log(`< ${i} > ${JSON.stringify(result[i])}`);
      console.log('=======================');
    }
  });
};

bookCrawler('http://www.yes24.com/24/Category/Display/001001046001');

bookCrawler('http://www.yes24.com/24/Category/Display/001001046002');

bookCrawler('http://www.yes24.com/24/Category/Display/001001047001');

bookCrawler('http://www.yes24.com/24/Category/Display/001001046014001');

bookCrawler('http://www.yes24.com/24/Category/Display/001001046014003');
