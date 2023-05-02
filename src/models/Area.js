const { Model, DataTypes } = require('sequelize');
class Areas extends Model{
  static init(sequelize){
    super.init({
      descricao: DataTypes.STRING
    }, {
      sequelize
    });
  }
  
  

}

module.exports = Areas;