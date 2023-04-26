'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('maquinas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      
      cod:{
        type: Sequelize.STRING,
        allowNull: false
      },

      descricao: {
        type: Sequelize.STRING,
        allowNull:false
      },

      linha_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: "linhas", key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      status:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      }


    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('maquinas');
     
  }
};
