const { Model, DataTypes } = require('sequelize');
class Niveis extends Model{
  static init(sequelize){
    super.init({
      descricao: DataTypes.STRING
    }, {
      sequelize
    });
  }
  
  

}

module.exports = Niveis;