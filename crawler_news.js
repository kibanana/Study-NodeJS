const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("http://www.etnews.com/news/section.html?id1=04");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("ul.list_news").children("li");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title : $(this).find('dl dt a').text(),
          summary : $(this).find('dl dd.summury').text(),
          url : $(this).find('dl dt a').attr('href'),
          image_url : $(this).find('dl dd a img').attr('src'),
          image_alt : $(this).find('dl dd a img').attr('alt'),
          author : $(this).find('dl dd.date span:first-child').text(),
          date : $(this).find('dl dd.date span:last-child').text()
      };
    });

    const data = ulList.filter(n => n.title);
    return data;
  })
  .then(res => log(res));