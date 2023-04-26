const Business = require('../models/Business');

module.exports={
  async buscarTodos(req, res){
    const business = await Business.findAll();
    return res.json(business);
  },

  async criarBusiness(req, res){
    const { cod, descricao, status } = req.body;
    const bussines = await Business.create({ cod, descricao, status });
    return res.json(bussines);
  },

  async buscarBusiness(req, res){
    const { cod } = req.params;

    const bussines = await Business.findOne({ where: { cod: cod}})

    return res.json(bussines);
  }

  
}