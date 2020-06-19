const express = require('express');
const app = express();
const port = 3004;
app.use(express.json());


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/pledges/:id', (req, res) => {
  console.log('req.params: ', req.params);
  res.send('/api/pledges endpoint firing');
});



app.listen(port, () => console.log(`app listening at http://localhost:${port}`));