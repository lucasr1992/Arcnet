const Area = require('../models/Area');

module.exports={
  async buscarTodos(req, res){
    const area = await Area.findAll();
    return res.json(area);
  },

  async criarArea(req, res){
    const { descricao } = req.body;
    const area = await Area.create({ descricao });
    return res.json(area);
  },

  async buscarArea(req, res){
    const { id } = req.params;
    const area = await Area.findByPk(id)

    return res.json(area);
  }

  
}