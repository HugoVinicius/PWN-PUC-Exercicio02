var express = require('express');
var router = express.Router();

let products = { items: [] };

router.post('/', function (req, res) {
    products.items.push(req.body);
    res.status(200).end('Produto incluido com sucesso!');
});

router.get('/listar', function (req, res) {
    res.status(200).json(products)
});

router.delete('/:id', function (req, res){
    var qtdExcuido = 0;

    for (var i = 0; i < products.items.length; i++) {
        if (products.items[i].id == req.params.id) {
            products.items.splice(i, 1)
            i--;
            qtdExcuido++;
        }
    }
    
    var msg = 'Foi excluido ' + qtdExcuido + ' com o id ' + req.params.id;

    if (qtdExcuido == 0){
        msg = 'Não foi localizado produto com o código ' + req.params.id + ' para ser excluido.';
    } 

    res.status(200).end(msg);
});


router.put('/:id', function (req, res){
    var qtdProdutoAlt = 0;

    for (var i = 0; i < products.items.length; i++) {
        if (products.items[i].id == req.params.id) {
            products.items[i].id = req.body.id;
            products.items[i].name = req.body.name;
            products.items[i].description = req.body.description;

            qtdProdutoAlt++;
        }
    }
    
    var msg = 'Foi alterado ' + qtdProdutoAlt + ' com o id ' + req.params.id;

    if (qtdProdutoAlt == 0){
        msg = 'Não foi localizado produto com o código ' + req.params.id + ' para ser alterado.';
    } 

    res.status(200).end(msg);
});

module.exports = router;