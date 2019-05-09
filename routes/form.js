var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('exercicio02_passo07', {});
});

module.exports = router;