var db = require('../../config/db.js');

var LoginUser = function(loginUser){
    if(loginUser != undefined){
        this.login = loginUser.login;
        this.senha = loginUser.senha;
    }
    else{
        this.login = "";
        this.senha = "";
    }      
};

LoginUser.buscarPorLogin = function(login, senha, callback){
    query = "SELECT * FROM `pi_backend`.Usuarios where login = '" + login + "' and senha = '" + senha + "';";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                usuarios: []
            });
        }
        else{
            if(rows.length > 0){
                callback.call(null, {
                erro: false, 
                usuarios: rows
                });
            }
            else{
                callback.call(null, {
                    erro: true, 
                    usuarios: [],
                    mensagem: "Usuario nao encontrado, tente novamente",
                });
            }                    
        }
    });
};


module.exports = LoginUser;