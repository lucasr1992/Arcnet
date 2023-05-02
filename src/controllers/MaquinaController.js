const Linha = require('../models/Linha');
const Maquina = require('../models/Maquina');
const Business = require('../models/Business');
const Dominio = require('../models/Dominio');
const Planta = require('../models/Planta');
const UnidadeOperativa = require('../models/UnidadeOperativa');
const TipoEquipamento = require('../models/Tipo');
const Colaboradores = require('../models/Colaborador');





module.exports = {
  async criarMaquina(req, res){   
    const { cod, descricao, status, linha_id, business_id, dominio_id, planta_id,
      unidade_operativa_id, tipo_id, responsavel_id} = req.body;

    const linha = await Linha.findByPk(linha_id);
    const business = await Business.findByPk(business_id);
    const dominio = await Dominio.findByPk(dominio_id);
    const planta = await Planta.findByPk(planta_id);
    const unidade = await UnidadeOperativa.findByPk(unidade_operativa_id);
    const tipo = await TipoEquipamento.findByPk(tipo_id);
    const responsavel = await Colaboradores.findByPk(responsavel_id);

    if(!responsavel){
      return res.status(400).json({ error: 'Colaborador não Encontrado' });
    }

    if(!business){
      return res.status(400).json({ error: 'Business não Encontrada' });
    }

    if(!linha){
      return res.status(400).json({ error: 'Linha não Encontrada' });
    }

    if(!dominio){
      return res.status(400).json({ error: 'Dominio não Encontrado' });
    }

    if(!planta){
      return res.status(400).json({ error: 'Planta não Encontrada' });
    }

    if(!unidade){
      return res.status(400).json({ error: 'Unidade Operativa não Encontrada' });
    }

    if(!tipo){
      return res.status(400).json({ error: 'Tipo de Equipamento não Encontrado' });
    }

    var data_proxima_att = Date;
    const dataAno = new Date();
    dataAno.setDate(dataAno.getDate() + 365);
    data_proxima_att = dataAno
    
    

    const maquina = await Maquina.create({
      cod,
      descricao,
      linha_id,
      status,
      business_id,
      dominio_id,
      planta_id,
      unidade_operativa_id,
      tipo_id,
      data_proxima_att,
      responsavel_id 
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
      include:[
        {association: 'linha'},
        {association: 'business'},
        {association: 'planta'},
        {association: 'unidade_operativa'},
        {association: 'dominio'}        
      ]
      
    });

    return res.json(maquina);
  },

  async desativarMaquina(req, res){
    const { id } = req.params;
    const { desativador } = req.body;
   
    const maquina = await Maquina.findOne({ where: { id: id, status:1}});
    const colaborador = await Colaboradores.findOne({ where: { id: desativador, status: 1}});
    if(!maquina){
      return res.status(400).json({ error: 'Maquina não Encontrada' });
    }

    if(!colaborador){
      return res.status(400).json({ error: 'Colaborador não Encontrado' });
    }

    const maquina_att = await Maquina.update(
      { status: 0 },{where: { id: id}}
    );

    return res.status(200).json("Equipamento Desativado com Sucesso!");
  },

  async ativarMaquina(req, res){
    const { id } = req.params;
    const { desativador } = req.body;
   
    const maquina = await Maquina.findOne({ where: { id: id, status: 0}});
    const colaborador = await Colaboradores.findOne({ where: { id: desativador, status: 1}});
    if(!maquina){
      return res.status(400).json({ error: 'Maquina não Encontrada' });
    }

    if(!colaborador){
      return res.status(400).json({ error: 'Colaborador não Encontrado' });
    }

    const maquina_att = await Maquina.update(
      { status: 1 },{where: { id: id}}
    );

    return res.status(200).json("Equipamento Ativado com Sucesso!");
  },

  
}