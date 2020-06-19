const express = require('express');
const { getPledges } = require('./model.js');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
const port = 3003;

app.get('/', (req, res) => res.send('Hello World!'));


/**
 * endpoint that takes a id (of a listing in kickstarter) and returns the data associated with that id
 */
app.get('/api/pledges/:id', (req, res) => {
  let { id } = req.params;
  return getPledges(id)
  .then((response) => {
    if (response.length < 1) {
      res.status(404).send('id not found in database');
    } else {
      res.status(200).json(response);
    }
  })
  .catch((err) => {
    console.log('error inside GET /api/pledges/:id endpoint: ', err);
    res.status(500).send('there was an error: ', err);
  });
});


app.listen(port, () => console.log(`app listening at http://localhost:${port}`));