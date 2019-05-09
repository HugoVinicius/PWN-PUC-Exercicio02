var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Puc Minas' });
});

router.get('/:firstName/:lastName', function(req, res, next){
  res.render('exercicio02_passo05', {nome: req.params.firstName, sobrenome: req.params.lastName});
});

module.exports = router;
