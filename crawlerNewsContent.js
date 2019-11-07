import * as axios from 'axios';
import * as cheerio from 'cheerio';

const getHtml = (uri) => {
  try {
    return axios.get(uri);
  } catch (error) {
    return error;
  }
};

const ulList = [];

getHtml('http://www.etnews.com/news/section.html?id1=04')
  .then((html) => {
    const $ = cheerio.load(html.data);
    const $titleList = $('ul.list_news').children('li');

    $titleList.each((i, elem) => {
      ulList.push({
        title: $(elem).find('dl dt a').text(),
        summary: $(elem).find('dl dd.summury').text(),
        url: $(elem).find('dl dt a').attr('href'),
        image_url: $(elem).find('dl dd a img').attr('src'),
        image_alt: $(elem).find('dl dd a img').attr('alt'),
        author: $(elem).find('dl dd.date span:first-child').text(),
        date: $(elem).find('dl dd.date span:last-child').text(),
      });
    });

    return ulList.filter((value) => value.url);
  })
  .then((res) => {
    console.log(res.length);
    for (let i = 0; i < res.length; i += 1) {
      console.log(res[i].url);
      getHtml(res[i].url)
        .then((html) => {
          const $ = cheerio.load(html.data);
          res[i].content = $('section.article_body').find('p').text();
          return res.filter((value) => value.content);
        })
        .then((result) => {
          console.log(result.length);
          result.forEach((v, j) => {
            console.log(`=====${j}=====`);
            console.log();
            console.log(JSON.stringify(v));
            console.log();
          });
        });
    }
  });
