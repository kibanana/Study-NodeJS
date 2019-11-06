import * as axios from 'axios';
import * as cheerio from 'cheerio';

const getHtml = async () => {
  try {
    return await axios.get('https://www.naver.com/');
  } catch (error) {
    return error;
  }
};

const separate = () => {
  getHtml()
    .then((html) => {
      const ulList = [];
      const $ = cheerio.load(html.data);
      const $bodyList = $('div.ah_roll_area ul.ah_l').children('li.ah_item');

      $bodyList.each((i) => {
        ulList[i] = {
          rank: $(this).find('span.ah_r').text(),
          keyword: $(this).find('span.ah_k').text(),
        };
        console.log($(this).find('span.ah_r').text());
      });

      const data = ulList.filter((n) => n.rank);
      return data;
    })
    .then((res) => res);
};

export default separate;
