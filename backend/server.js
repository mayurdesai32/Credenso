const express = require('express');
const app = express();

const port = 8000;

app.post('/', (req, res) => res.send('hello world'));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
