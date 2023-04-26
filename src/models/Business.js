const { Model, DataTypes } = require('sequelize');
class Business extends Model{
  static init(sequelize){
    super.init({
      cod: DataTypes.STRING,
      descricao: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }
  
  

}

module.exports = Business;