const Linha = require('../models/Linha');
const Maquina = require('../models/Maquina');

module.exports = {
  async criarMaquina(req, res){
    
    const { cod, descricao, status, linha_id, business_id, dominio_id, planta_id, unidade_operativa_id } = req.body;

    const linha = await Linha.findByPk(linha_id);

    if(!linha){
      return res.status(400).json({ error: 'Linha não Encontrada' });
    }

    const maquina = await Maquina.create({
      cod,
      descricao,
      linha_id,
      status,
      business_id,
      dominio_id,
      planta_id,
      unidade_operativa_id      
    });

    return res.json(maquina);
  },

  async buscarTodos(req, res){
    /*const maquinas = await Maquina.findAll({
      include:{association: 'linha'}
    });  este puxa as linhas juntas  */  

    const maquinas = await Maquina.findAll();// este puxa só as maquinas

    return res.json(maquinas);
  },


  async buscarMaquina(req, res){
    const { cod } = req.params;
    
    const maquina = await Maquina.findByPk(cod, {
      include:{association: 'linha'}
    });

    return res.json(maquina);
  }

  
}