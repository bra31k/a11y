const express = require('express');
const pa11y = require('pa11y');

const KPI = require("./KPI");

const app = express();
const port = 5000;

app.get('/check', (request, response) => {
  const url = request.query.url;
  const siteName = url.replace(/\//g, '_');

  pa11y(url, {
        notice: true,
        includeWarnings: true,
        screenCapture: `./images/${siteName}.png`,
        standard: 'WCAG2AA' })
      .then((res) => {
        res.img = `http://127.0.0.1:5000/images/${siteName}.png`;
        res.KPI = KPI(res.issues);

        response.send(res)
      })
      .catch((err) => {
        console.error(err);
        response.send('Произошла ошибка')
      });
});

app.use('/images', express.static('images'));

app.listen(port, (err) => {
  if (err) {
    return console.error('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});