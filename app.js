const express = require('express');

const app = express();

const port = 5035;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support 2',
  });
});
app.listen(port)