const Colaborador = require('../models/Colaborador');
const Area = require('../models/Area');
const Nivel = require('../models/Area');

module.exports={
  async buscarTodos(req, res){
    const colaborador = await Colaborador.findAll();
    return res.json(colaborador);
  },

  async criarColaborador(req, res){
    const { 
      registro, 
      nome, 
      especialidade, 
      turno, 
      senha, 
      email, 
      status, 
      niveis_id, 
      area_id
    } = req.body;

    const area = await Area.findByPk(area_id);
    const nivel = await Nivel.findByPk(niveis_id);

    if(!area){
      return res.status(400).json({ error: 'Area não Encontrada' });
    }

    if(!nivel){
      return res.status(400).json({ error: 'Nivel não Encontrado' });
    }

    const colaborador = await Colaborador.create({ 
      registro, 
      nome, 
      especialidade, 
      turno, 
      senha, 
      email,
      area_id, 
      niveis_id,
      status
    });

    return res.json(colaborador);
  },

  async buscarColaborador(req, res){
    const { id } = req.params;
    const colaborador = await Colaborador.findByPk(id)

    return res.json(colaborador);
  }

  
}