var express = require('express');
var HomeController = require('../controller/home_controller');
var UsuariosController = require('../controller/usuarios_controller');
var TutoresController = require('../controller/tutores_controller');
var LoginUserController = require('../controller/loginUser_controller');
var LoginTutorController = require('../controller/loginTutor_controller');
var router = express.Router();

/* GET home page. */
router.get('/', HomeController.index);
router.get('/usuario', HomeController.usuario);


//router usuarios
router.head('/usuarios.json', UsuariosController.head);
router.get('/usuarios.json', UsuariosController.todos);
router.post('/usuarios.json', UsuariosController.criar);
router.put('/usuarios.json', UsuariosController.atualizar);
router.options('/usuarios.json', UsuariosController.options);
router.get('/usuarios/:id.json', UsuariosController.porId);
router.patch('/usuarios/:id.json', UsuariosController.atualizarPorPatch);
router.delete('/usuarios/:id.json', UsuariosController.excluirUsuario);
router.options('/usuarios/:id.json', UsuariosController.options);

//router tutores
router.head('/tutores.json', TutoresController.head);
router.get('/tutores.json', TutoresController.todos);
router.post('/tutores.json', TutoresController.criar);
router.put('/tutores.json', TutoresController.atualizar);
router.options('/tutores.json', TutoresController.options);
router.get('/tutores/:id.json', TutoresController.porId);
router.patch('/tutores/:id.json', TutoresController.atualizarPorPatch);
router.delete('/tutores/:id.json', TutoresController.excluirUsuario);
router.options('/tutores/:id.json', TutoresController.options);

//router Login do Usuario
router.head('/loginUser.json', LoginUserController.head);
router.post('/loginUser.json', LoginUserController.autenticar);

//router Login do Tutor
router.head('/loginTutor.json', LoginTutorController.head);
router.post('/loginTutor.json', LoginTutorController.autenticar);


module.exports = router;
