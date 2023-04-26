'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('businesses', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
      },

      cod:{
        type: Sequelize.STRING,
        allowNull:false
      },
      
      descricao:{
        type: Sequelize.STRING,
        allowNull:false
      },

      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('businesses');
    
  }
};
