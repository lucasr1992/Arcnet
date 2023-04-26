const Dominio = require('../models/Dominio');

module.exports={
  async buscarTodos(req, res){
    const dominio = await Dominio.findAll();
    return res.json(dominio);
  },

  async criarDominio(req, res){
    const { descricao, status } = req.body;
    const dominio = await Dominio.create({ descricao, status });
    return res.json(dominio);
  },

  async buscarDominio(req, res){
    const { id } = req.params;
    const dominio = await Dominio.findByPk(id)

    return res.json(dominio);
  }

  
}