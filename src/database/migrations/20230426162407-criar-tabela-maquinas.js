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

      business_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: "businesses", key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      dominio_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: "dominios", key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      planta_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: "planta", key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      unidade_operativa_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: "unidade_operativas", key: 'id'},
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
