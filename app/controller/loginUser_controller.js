var LoginUser = require("../models/loginUser");
var Token = require("../models/token");

var LoginUserController = {
  head: function (req, res, next) {
    new Token().criar(function (retorno) {
      res.header("auth_token", retorno.token);
      res.status(204).send("");
    });
  },
  autenticar: function (req, res, next) {
    var token = req.headers.auth_token;
        Token.verificaToken(token, function(retorno){
            if(retorno.tokenValidado){
                Token.apagarToken(token); 
                
                if (!req.body.login) {
                  res.status(400).send({
                    erro: "erro ao autenticar usuario, login de usuário precisa estar preenchido",
                  });
                  return;
                }
            
                if (!req.body.senha) {
                  res.status(400).send({
                    erro: "erro ao autenticar usuario, senha de usuário precisa estar preenchido",
                  });
                  return;
                }

                if (req.body.login !== undefined ) {
                  LoginUser.buscarPorLogin(req.body.login, req.body.senha, function (retorno) {
                    if (retorno.erro) {
                      res.status(500).send({
                        erro: "Erro ao autenticar usuarios - (" + retorno.mensagem + ")",
                      });
                    } else {
                      res.status(200).send({
                        data: retorno.usuarios
                      });
                    }
                  });
                } else {
                  res.status(500).send({
                    erro: "erro ao autenticar usuario",
                  });
                  return;
                }                
            }
            else{
                res.status(401).send({
                    erro: 'Token inválido, você não tem autorização de acessar esta API'
                });
            }
        });     
  },

  options: function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS, PATCH"
    );
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
  },
};

module.exports = LoginUserController;
