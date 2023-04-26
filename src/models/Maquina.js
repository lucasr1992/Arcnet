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
  }
}

module.exports = Maquina;