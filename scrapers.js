const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.basketball-reference.com/leaders/pts_career.html');

  const players = await page.evaluate(() => {
    const rows = document.querySelectorAll('table tbody tr');
    const playerData = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const playerName = row.querySelector('td.rank').nextElementSibling.textContent.trim();
      const points = row.querySelector('td.pts').textContent.trim();

      if (playerName && points) {
        playerData.push({ playerName, points });
      }
    }

    return playerData;
  });

  console.log(players);
  await browser.close();
})();
