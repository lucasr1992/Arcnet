const { Model, DataTypes } = require('sequelize');
class Colaboradores extends Model{
  static init(sequelize){
    super.init({
      registro: DataTypes.STRING,
      nome: DataTypes.STRING,
      especialidade: DataTypes.STRING,
      turno: DataTypes.STRING,
      senha: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      data_desativacao: DataTypes.DATEONLY,
    }, {
      sequelize,
      timestamps: true
    });
  }

  static associate(models) {
    this.belongsTo(models.Niveis, { foreignKey: 'niveis_id', as: 'nivel' });
    this.belongsTo(models.Areas, { foreignKey: 'area_id', as: 'area' });    
  }
  
  

}

module.exports = Colaboradores;