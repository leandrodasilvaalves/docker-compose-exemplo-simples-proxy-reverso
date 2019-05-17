
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var pessoas =[{ nome: "João", idade: 10}, {nome: "Maria", idade:9}, { nome: "Zezinho", idade: 8}]
  res.send(pessoas);
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});