var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var nome = req.body.nome, email = req.body.email, endereco = req.body.endereco;
    console.log(`Procesando dados do form: nome: ${nome}, email: ${email}, endereco: ${endereco}`)
    res.status(200).render('exercicio02_passo08', { nome: nome, email: email, endereco: endereco });
});

router.get('/', function (req, res) {
    res.redirect('/form');
});


module.exports = router;