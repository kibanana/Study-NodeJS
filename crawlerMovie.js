/* eslint-disable prefer-const */
import { fetch } from 'cheerio-httpcli';

const movieCrawler = (offset, limit) => {
  fetch('https://movie.naver.com/movie/running/current.nhn', (err, $, res, body) => {
    let result = [];
    let tempTitle;

    // eslint-disable-next-line consistent-return
    $('dl.lst_dsc').each((i, elem) => {
      if (i > 5) return true; // break 의미

      tempTitle = $(elem).find('dt.tit a').text();
      if (tempTitle) {
        result.push({
          title: tempTitle,
          ticketRate: $(elem).find('dd.star dl.info_exp dd div span.num').text(),
          genre: $(elem).find('dd dl.info_txt1 dd:first-of-type span.link_txt a').text(),
          director: $(elem).find('dd dl.info_txt1 dd:nth-of-type(2) span.link_txt a').text(),
          actors: $(elem).find('dd dl.info_txt1 dd:last-child span.link_txt a').text(),
        });
      }
    });

    for (let i = 0; i < result.length; i += 1) {
      console.log(`< ${i} > ${JSON.stringify(result[i])}`);
      console.log('=======================');
    }
  });
};

movieCrawler('http://www.yes24.com/24/Category/Display/001001046001');
