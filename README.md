## Criando pi-backend 

# Baixar os modulos do npm
npm i 

# Criar o arquivo dotenv na raiz da aplicação e setar as variaveis 
HOST=localhost          -> host do Mysql
USER=root               -> Usuario do MySql
PASSWORD=               -> Senha do MySql
DATABASE=pi_backend     -> Database do MySql
PORT = 3000             -> Porta que inicia a aplicação pi-backend

# Entrar MySql e rodar o script do banco
arquivo na raiz da aplicação script-banco

# Como iniciar aplicação
npm start


# Teste de endpoint da api 
# Metodo GET nao precisa de token
Buscar todos os usuarios
Metodo GET => http://localhost:3000/usuarios.json

Buscar todos os Tutores
Metodo GET => http://localhost:3000/tutores.json

# Buscar o token pra acessr outros metodos  
Metodo HEAD => http://localhost:3000/usuarios.json
metodo HEAD => http://localhost:3000/tutores.json

# Criar Usuario  
Metodo HEAD => http://localhost:3000/usuarios.json
Pegar o token no headers => e inserir nos header da requisição com o nome auth_token= +TokenDaApi
Inserir o obejto json {
    "nome": "",
    "login": "",
    "senha": "",
    "email": ""
  }
Enviar Metodo POST => http://localhost:3000/usuarios.json


