const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  // MEMO: サンドボックスの設定
  // サンドボックスを設定しないとエラーになる
  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // google(日本版)のスクショをとる
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 800
  });
  await page.goto('https://www.google.co.jp/', {waitUntil: 'networkidle2'});
  await page.screenshot({
    path: path.resolve(__dirname, 'screenshot/test.png'),
    fullPage: true,
  });

  console.log('success!');

  await browser.close();
})();
