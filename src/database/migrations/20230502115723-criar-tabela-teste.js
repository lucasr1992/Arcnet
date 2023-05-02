'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('testes', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },

      nome:{
        type: Sequelize.STRING,
        allowNull:false
      },

      created_at:{
        type:Sequelize.DATEONLY,
        allowNull:false,
        createdAt:true
      },

      updated_at:{
        type:Sequelize.DATEONLY,
        allowNull:false,
        updatedAt: true
      },

      rev_date:{
        type:Sequelize.DATEONLY,
        allowNull:false,
        
      }


    
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('testes');
     
  }
};
