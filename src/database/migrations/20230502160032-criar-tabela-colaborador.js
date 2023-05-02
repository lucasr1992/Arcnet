'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('colaboradores', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      
      registro:{
        type: Sequelize.STRING,
        allowNull:false
      },

      nome:{
        type: Sequelize.STRING,
        allowNull:false
      },

      especialidade:{
        type: Sequelize.STRING,
        allowNull:true
      },

      turno:{
        type: Sequelize.STRING,
        allowNull:false
      },

      senha:{
        type: Sequelize.STRING,
        allowNull:false
      },

      email:{
        type: Sequelize.STRING,
        allowNull:true
      },
      

      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },

      // area:{
      //   type: Sequelize.STRING,
      //   allowNull:false
      // },

      // nivel:{
      //   type: Sequelize.STRING,
      //   allowNull:false
      // },




    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('colaboradores');
    
  }
};
