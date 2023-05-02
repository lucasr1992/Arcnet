const { Model, DataTypes } = require('sequelize');
class Teste extends Model{
  static init(sequelize){
    super.init({
      nome: DataTypes.STRING, 
      rev_date: DataTypes.DATEONLY,   
    }, {
      sequelize,
      timestamps: true,
      
    });
  }
  
  

}

module.exports = Teste;