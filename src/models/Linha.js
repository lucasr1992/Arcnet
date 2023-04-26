const { Model, DataTypes } = require('sequelize');
class Linha extends Model{
  static init(sequelize){
    super.init({
      descricao: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }
  
  static associate(models) {
    this.hasMany(models.Maquina, { foreignKey: 'linha_id', as: 'maquina' });

  }

}

module.exports = Linha;