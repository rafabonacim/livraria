const express = require("express");
const router = express.Router();
const livrariaController = require("../controllers/livrariaController");
const usuarioController = require("../controllers/usuarioController");


router.get('/livros', livrariaController.listar)

router.post('/livros/criar', livrariaController.criar)

router.get('/livros/mostrar/:id', livrariaController.mostrar)

router.put('/livros/atualizar/:id', livrariaController.atualizar)

router.get('/usuario/buscar/:cep', usuarioController.buscarCep)


module.exports = router;