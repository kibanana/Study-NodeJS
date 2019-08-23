const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async (uri) => {
  try {
    return await axios.get(uri);
  } catch (error) {
    console.error(error);
  }
};

let ulList = [];

getHtml("http://www.etnews.com/news/section.html?id1=04")
  .then(html => {
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
  .then(res => {
    let i;
    for (let i = 0; i < res.length-1; i++) {
      item = res[i];
      getHtml(item.url)
      .then(html => {
          const $ = cheerio.load(html.data);
          const $bodyList = $("section.article_body");
      
          $bodyList.each(function() {
              res[i].content = $(this).find('p').text();
          });
          
          const data = ulList.filter(n => n.title);
          return data[i];
      })
      .then((res) => {
        console.log(res);
        console.log('=============================');
      });
    }
  });