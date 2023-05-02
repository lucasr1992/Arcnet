const Tipo = require('../models/Tipo');

module.exports={
  async buscarTodos(req, res){
    const tipo = await Tipo.findAll();
    return res.json(tipo);
  },

  async criarTipo(req, res){
    const { descricao } = req.body;
    const tipo = await Tipo.create({ descricao });
    return res.json(tipo);
  },

  async buscarTipo(req, res){
    const { id } = req.params;
    const tipo = await Tipo.findByPk(id)

    return res.json(tipo);
  }

  
}