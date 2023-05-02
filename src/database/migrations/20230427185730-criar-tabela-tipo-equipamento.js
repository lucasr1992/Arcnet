'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tipo_equipamentos', { 
      id: {
        type: Sequelize.INTEGER ,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
      },

      descricao: {
        type: Sequelize.STRING ,
        allowNull:false,
      }
    
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tipo_equipamentos');
    
  }
};
