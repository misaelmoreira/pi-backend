var db = require('../../config/db.js');

var LoginTutor = function(loginTutor){
    if(loginTutor != undefined){
        this.login = loginTutor.login;
        this.senha = loginTutor.senha;
    }
    else{
        this.login = "";
        this.senha = "";
    }      
};

LoginTutor.buscarPorLogin = function(login, senha, callback){
    query = "SELECT * FROM `pi_backend`.Tutores where login = '" + login + "' and senha = '" + senha + "';";
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
                    mensagem: "Tutor nao encontrado, tente novamente",
                });
            }                    
        }
    });
};


module.exports = LoginTutor;