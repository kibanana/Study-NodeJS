import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const getHtml = async () => {
  try {
    return await fetch('http://www.etnews.com/news/section.html?id1=04')
      // eslint-disable-next-line no-return-await
      .then(async (res) => await res.text());
  } catch (error) {
    return error;
  }
};

getHtml()
  .then((html) => {
    const ulList = [];
    const $ = cheerio.load(html);
    const $bodyList = $('ul.list_news').children('li');

    $bodyList.each((i, value) => {
      if ($(value).find('dl dt a').attr('href')) {
        ulList[i] = {
          title: $(value).find('dl dt a').text(),
          summary: $(value).find('dl dd.summury').text(),
          url: $(value).find('dl dt a').attr('href'),
          image_url: $(value).find('dl dd a img').attr('src'),
          image_alt: $(value).find('dl dd a img').attr('alt'),
          author: $(value).find('dl dd.date span:first-child').text(),
          date: $(value).find('dl dd.date span:last-child').text(),
        };
      }
    });

    const data = ulList.filter((n) => n.title);
    return data;
  })
  .then((res) => {
    res.forEach((v) => {
      console.log(JSON.stringify(v, null, 4));
    });
  });
