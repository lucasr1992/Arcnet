const { Model, DataTypes } = require('sequelize');

class Maquina extends Model {
  static init(sequelize) {
    super.init({
      cod: DataTypes.STRING,
      descricao: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Linha, { foreignKey: 'linha_id', as: 'linha' });
    this.belongsTo(models.Business, { foreignKey: 'business_id', as: 'business' });
    this.belongsTo(models.Planta, { foreignKey: 'planta_id', as: 'planta' });
    this.belongsTo(models.UnidadeOperativa, { foreignKey: 'unidade_operativa_id', as: 'unidade_operativa' });
    this.belongsTo(models.Dominio, { foreignKey: 'dominio_id', as: 'dominio' });
  }
}

module.exports = Maquina;