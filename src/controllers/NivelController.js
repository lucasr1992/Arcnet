const Nivel = require('../models/Nivel');

module.exports={
  async buscarTodos(req, res){
    const nivel = await Nivel.findAll();
    return res.json(nivel);
  },

  async criarNivel(req, res){
    const { descricao } = req.body;
    const nivel = await Nivel.create({ descricao });
    return res.json(nivel);
  },

  async buscarNivel(req, res){
    const { id } = req.params;
    const nivel = await Nivel.findByPk(id)

    return res.json(nivel);
  }

  
}