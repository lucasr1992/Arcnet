const { Model, DataTypes } = require('sequelize');
class Plantas extends Model{
  static init(sequelize){
    super.init({
      descricao: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    }, {
      sequelize
    });
  }
  
  

}

module.exports = Plantas;