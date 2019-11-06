import * as axios from 'axios';
import * as cheerio from 'cheerio';

const getHtml = async () => {
  try {
    return await axios.get('http://www.etnews.com/news/section.html?id1=04');
  } catch (error) {
    return error;
  }
};

getHtml()
  .then((html) => {
    const ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $('ul.list_news').children('li');

    $bodyList.forEach((value, i) => {
      ulList[i] = {
        title: $(this).find('dl dt a').text(),
        summary: $(this).find('dl dd.summury').text(),
        url: $(this).find('dl dt a').attr('href'),
        image_url: $(this).find('dl dd a img').attr('src'),
        image_alt: $(this).find('dl dd a img').attr('alt'),
        author: $(this).find('dl dd.date span:first-child').text(),
        date: $(this).find('dl dd.date span:last-child').text(),
      };
    });

    const data = ulList.filter((n) => n.title);
    return data;
  })
  .then((res) => {
    console.log(res);
  });
