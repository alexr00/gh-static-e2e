const express = require('express');
const products = require("./products.json");

const app = express();

app.use('/GetProducts', function(req, res, next) {
  res.send(products);
})

app.listen(3005, function() {
  // Log 
  console.log('server listening on http://localhost:3005');
});

