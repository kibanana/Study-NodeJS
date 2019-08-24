const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://www.naver.com/");
  } catch (error) {
    console.error(error);
  }
};

module.exports = function () {
  getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.ah_roll_area ul.ah_l").children("li.ah_item");

    $bodyList.each(function(i, elem) {
      ulList[i] = {
          rank : $(this).find('span.ah_r').text(),
          keyword : $(this).find('span.ah_k').text()
      };
      


      console.log($(this).find('span.ah_r').text());
    });

    const data = ulList.filter(n => n.rank);
    return data;
    
  })
  .then(res => log(res));
};