'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('colaboradores', 'area_id',
      { 
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{ model: "areas", key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'RESTRICT'
      },

      
      await queryInterface.addColumn('colaboradores', 'created_at',{ 
        type:Sequelize.DATEONLY,
        allowNull:false,
        createdAt:true
      }),

      await queryInterface.addColumn('colaboradores', 'updated_at',{ 
        type:Sequelize.DATEONLY,
        allowNull:false,
        updatedAt:true
      }),

      await queryInterface.addColumn('colaboradores', 'data_desativacao',{ 
        type:Sequelize.DATEONLY,
        allowNull:true,
      }),

    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('colaboradores', 'area_id');
    await queryInterface.removeColumn('colaboradores', 'created_at');
    await queryInterface.removeColumn('colaboradores', 'updated_at');
    await queryInterface.removeColumn('colaboradores', 'data_desativacao');
  }
  
};
