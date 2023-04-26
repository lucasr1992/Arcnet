const UnidadeOperativa = require('../models/UnidadeOperativa');

module.exports={
  async buscarTodos(req, res){
    const unidadeoperativa = await UnidadeOperativa.findAll();
    return res.json(unidadeoperativa);
  },

  async criarUnidadeOperativa(req, res){
    const { descricao, status } = req.body;
    const unidadeoperativa = await UnidadeOperativa.create({ descricao, status });
    return res.json(unidadeoperativa);
  },

  async buscarUnidadeOperativa(req, res){
    const { id } = req.params;
    const unidadeoperativa = await UnidadeOperativa.findByPk(id)

    return res.json(unidadeoperativa);
  }

  
}