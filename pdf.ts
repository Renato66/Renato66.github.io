import fs from "fs";
import puppeteer, { Page } from "puppeteer";
import express from "express";

const generatePdf = async (page: Page, url: string, path: string) => {
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  await page.pdf({
    path,
    format: "A4",
    printBackground: true,
  });
};

const checkDownloadFolder = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const getLangs = () => {
  const locales = fs.readdirSync("./locales");
  return locales.map((elem) => elem.split(".")[0]);
};

(async () => {
  const dir = "./dist/download";
  // If not exists create download folder
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const langs = getLangs();
  const port = 3002;
  // Set express
  const app = express();
  app.use(express.static(`${__dirname}/dist`));
  const server = app.listen(port);

  // Set puppeteer
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  // Run all languages
  for await (const lang of langs) {
    await generatePdf(
      page,
      `http://localhost:${port}/${lang}/resume/`,
      `${dir}/renato-vicente-cv-${lang}.pdf`
    );
  }
  browser.close();
  server.close();
  process.exit();
})();
