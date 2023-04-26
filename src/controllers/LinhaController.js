const Linha = require('../models/Linha');
const Maquina = require('../models/Maquina');

module.exports={
  async buscarTodos(req, res){
    const linhas = await Linha.findAll();
    return res.json(linhas);
  },

  async criarLinha(req, res){
    const { descricao, status } = req.body;
    const linha = await Linha.create({ descricao, status });
    return res.json(linha);
  },

  async buscarEquipamentos(req, res){
    const { linha_id } = req.params;
    const maquinas = await Maquina.findByPk(linha_id)

    return res.json(maquinas);
  }

  
}