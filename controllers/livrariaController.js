const { Livros, Sequelize} = require('../models');


const livrariaController = {
    listar: async (req,res) => {
        //listando professores com turmas relacionadas
        const livros = await Livros.findAll({
            order: [['titulo', 'ASC']]
        });

        return res.json(livros);
    },
    criar: async (req,res) =>{
        const {titulo,quantidade_paginas,autor,ano_lancamento,estoque} = req.body;

        const livros = await Livros.create({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque

        });

        return res.json(livros).status(200);
    },
    mostrar: async (req,res) =>{
        const {id} = req.params;

        const livro = await Livros.findByPk(id)

        return res.json(livro).status(200);
    },
    atualizar: async (req,res) => {
        const {id} = req.params;
        const {titulo,quantidade_paginas,autor,ano_lancamento,estoque} = req.body;

        const livro = await Livros.update({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        }, {where: {id}})
        return res.json(livro).status(200);
    }
}
    
module.exports = livrariaController;