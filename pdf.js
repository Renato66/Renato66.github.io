const path = require('path')
const fs = require('fs')
const puppeteer = require('puppeteer')
const dir = './dist/download';

(async () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`file:${path.join(__dirname, 'dist/resume/index.html')}`, { waitUntil: 'networkidle2' })
  await page.pdf({ path: `${dir}/renato-vicente-cv-pt.pdf`, format: 'A4' })
  await page.goto(`file:${path.join(__dirname, 'dist/en/resume/index.html')}`, { waitUntil: 'networkidle2' })
  await page.pdf({ path: `${dir}/renato-vicente-cv-en.pdf`, format: 'A4' })
  await browser.close()
})()
