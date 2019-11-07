import * as axios from 'axios';
import * as cheerio from 'cheerio';

const getHtml = () => {
  try {
    return axios.get('https://www.naver.com/');
  } catch (error) {
    return error;
  }
};

const separate = () => {
  getHtml()
    .then((html) => {
      const ulList = [];
      const $ = cheerio.load(html.data);

      // const $bodyList = $('ul.ah_l').children('li.ah_item');

      $('li.ah_item').each((i, elem) => {
        ulList.push({
          rank: $(elem).find('span.ah_r').text(),
          keyword: $(elem).find('span.ah_k').text(),
        });
      });
      return ulList;
    })
    .then((res) => {
      res.forEach((v, i) => {
        console.log(JSON.stringify(v));
      });
    });
};

separate();

export default separate;
