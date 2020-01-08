import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://movie.naver.com/movie/running/current.nhn#', { waitUntil: 'networkidle2' });
  await page.setViewport({
    width: 1280,
    height: 1430,
  });

  const main = await page.$('#content');
  const mainResult = await main.boundingBox();

  await page.pdf({
    path: 'naverMovie.pdf',
    format: 'A4',
    pageRanges: '1',
  });
  await page.screenshot({
    path: 'naverMovie.png',
    clip: {
      x: mainResult.x,
      y: mainResult.y,
      width: Math.min(mainResult.width, page.viewport().width),
      height: Math.min(mainResult.height, page.viewport().height),
    },
  });
  await browser.close();
})();
