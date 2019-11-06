import * as axios from 'axios';
import * as cheerio from 'cheerio';

import * as cKeywords from './crawler_keywords';

const getHtml = async (uri) => {
  try {
    return await axios.get(uri);
  } catch (error) {
    return error;
  }
};

const ulList = [];

getHtml('http://www.etnews.com/news/section.html?id1=04')
  .then((html) => {
    const $ = cheerio.load(html.data);
    const $bodyList = $('ul.list_news').children('li');

    $bodyList.forEach(() => {
      ulList.push({
        title: $(this).find('dl dt a').text(),
        summary: $(this).find('dl dd.summury').text(),
        url: $(this).find('dl dt a').attr('href'),
        image_url: $(this).find('dl dd a img').attr('src'),
        image_alt: $(this).find('dl dd a img').attr('alt'),
        author: $(this).find('dl dd.date span:first-child').text(),
        date: $(this).find('dl dd.date span:last-child').text(),
      });
    });

    const data = ulList.filter((n) => n.title);
    return data;
  })
  .then((res) => {
    for (let i = 0; i < res.length - 1; i += 1) {
      getHtml(res[i].url)
        .then((html) => {
          const $ = cheerio.load(html.data);
          const $bodyList = $('section.article_body');

          $bodyList.forEach(() => {
            res[i].content = $(this).find('p').text();
          });

          const data = ulList.filter((dataPart) => dataPart.title);
          return data[i];
        })
        .then((result) => {
          console.log(result);
        });
    }
  })
  .then(() => cKeywords());
