var db = require('../../config/db.js');

var Login = function(login){
    if(login != undefined){
        this.login = usuario.login;
        this.senha = usuario.senha;
    }
    else{
        this.login = "";
        this.senha = "";
    }      
};

Login.buscarPorLogin = function(login, senha, callback){
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


module.exports = Login;