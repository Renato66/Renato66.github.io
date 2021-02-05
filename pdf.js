const fs = require('fs')
const puppeteer = require('puppeteer')
const dir = './dist/download'
const express = require('express');

(async () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  const port = process.env.PORT || 3001
  const app = express()

  app.use(express.static(`${__dirname}/dist`))

  const server = app.listen(port)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`http://localhost:${port}/resume/`, { waitUntil: 'networkidle2' })
  await page.pdf({ path: `${dir}/renato-vicente-cv-pt.pdf`, format: 'A4', printBackground: true })
  await page.goto(`http://localhost:${port}/en/resume/`, { waitUntil: 'networkidle2' })
  await page.pdf({ path: `${dir}/renato-vicente-cv-en.pdf`, format: 'A4', printBackground: true })
  server.close()
  process.exit()
})()
