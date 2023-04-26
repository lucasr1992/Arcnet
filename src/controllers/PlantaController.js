const Planta = require('../models/Planta');

module.exports={
  async buscarTodos(req, res){
    const planta = await Planta.findAll();
    return res.json(planta);
  },

  async criarPlanta(req, res){
    const { descricao, status } = req.body;
    const planta = await Planta.create({ descricao, status });
    return res.json(planta);
  },

  async buscarPlanta(req, res){
    const { id } = req.params;
    const planta = await Planta.findByPk(id)

    return res.json(planta);
  }

  
}