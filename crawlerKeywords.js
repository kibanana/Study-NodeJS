import * as axios from 'axios';
import * as cheerio from 'cheerio';

const getHtml = async () => {
  try {
    return await axios.get('https://www.naver.com/');
  } catch (error) {
    return error;
  }
};

getHtml()
  .then((html) => {
    const ulList = [];
    const $ = cheerio.load(html.data);

    $('li.ah_item').each((i, elem) => {
      console.log(i);
      ulList.push({
        rank: $(elem).find('span.ah_r').text(),
        keyword: $(elem).find('span.ah_k').text(),
      });
    });
    return ulList;
  })
  .then((res) => {
    res.forEach((v) => {
      console.log(JSON.stringify(v));
    });
  });
