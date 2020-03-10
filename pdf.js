const puppeteer = require('puppeteer');
const path = require('path');
var fs = require('fs');
var dir = './dist/download';

(async () => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.goto(`file:${path.join(__dirname, 'dist/resume/index.html')}`);
  await page.pdf({path: `${dir}/renato-vicente-cv-pt.pdf`, format: 'A4'});
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.goto(`file:${path.join(__dirname, 'dist/en/resume/index.html')}`);
  await page.pdf({path: `${dir}/renato-vicente-cv-en.pdf`, format: 'A4'});
  await browser.close();
})();