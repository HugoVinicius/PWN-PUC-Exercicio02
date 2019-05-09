var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
  var username = req.body.username, password = req.body.password;
  console.log(`POST request: usuário: ${username} e senha ${password}`);
  res.status(200).end(`Agora você está logado ${username}`);
});

module.exports = router;
