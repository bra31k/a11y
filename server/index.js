const express = require('express');
const pa11y = require('pa11y');

const app = express();
const port = 3000;

app.get('/check', (request, response) => {
  const url = request.query.url;
  const siteName = url.replace('/', '_');

  pa11y(url,
      {
        notice: true,
        includeWarnings: true,
        screenCapture: `./images/${siteName}.png`,
        standard: 'WCAG2AA'
      }).then((res) => {
        res.img = `http://127.0.0.1:3000/images/${siteName}.png`;

        response.send(res)
      }
  )
});

app.use('/images', express.static('images'));

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});