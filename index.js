const express = require('express');
const eth10 = require('@muzamint/eth10')

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
