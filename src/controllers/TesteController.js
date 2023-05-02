const { DATEONLY } = require('sequelize');
const Teste = require('../models/Teste');

module.exports={
  

  async criarTeste(req, res){
    var rev_date = DATEONLY;
    const dataTeste = new Date();
    dataTeste.setDate(dataTeste.getDate() + 365);
    rev_date = dataTeste.toISOString().split('T')[0];
    const { nome } = req.body;
    const teste = await Teste.create({ nome, rev_date });

    return res.json(teste);
  },


  async attTeste(req, res){
    const { id } = req.params;
    const { nome } = req.body;

    const testeBusca = await Teste.findByPk(id);
    if(!testeBusca){
      return res.status(400).json({ error: 'Teste Não Encontrado' });
    }

    const teste = await Teste.update(
      { 
        nome: nome 
      },
      {
        where: { id: id}
      }
    
    );
    return res.json({
      'id': id,
      'nome': nome,
    });
  },
  

}