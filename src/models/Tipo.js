const { Model, DataTypes } = require('sequelize');
class TipoEquipamentos extends Model{
  static init(sequelize){
    super.init({
      descricao: DataTypes.STRING
    }, {
      sequelize
    });
  }
  
  

}

module.exports = TipoEquipamentos;