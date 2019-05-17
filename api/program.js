
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var pessoas = [{ nome: "João", idade: 10 }, { nome: "Maria", idade: 9 }, { nome: "Zezinho", idade: 8 }];
  res.send(pessoas);
});

app.get('/animais', function (req, res) {
  var animais = [{ nome: "Spike", especie: 'Cachorro' }, { nome: "Tom", especie: 'Gato' }, { nome: "Jerry", especie: 'Rato' }];
  res.send(animais);
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});