const { Model, DataTypes } = require('sequelize');
class Dominio extends Model{
  static init(sequelize){
    super.init({
      descricao: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }
  
  

}

module.exports = Dominio;