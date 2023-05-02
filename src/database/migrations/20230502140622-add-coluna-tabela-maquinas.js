'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('maquinas', 'created_at',{ 
      type:Sequelize.DATEONLY,
      allowNull:false,
      createdAt:true
    },

    await queryInterface.addColumn('maquinas', 'updated_at',{ 
      type:Sequelize.DATEONLY,
      allowNull:false,
      updatedAt:true
    }),

    await queryInterface.addColumn('maquinas', 'data_proxima_att',{ 
      type:Sequelize.DATEONLY,
      allowNull:false,
    }),

    await queryInterface.addColumn('maquinas', 'tipo_id',{ 
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{ model: "tipo_equipamentos", key: 'id'},
      onUpdate:'CASCADE',
      onDelete:'RESTRICT'
    }),

      // responsavel:{
      //   type: Sequelize.INTEGER
      // },

      // desativador:{
      //   type: Sequelize.INTEGER
      // },

    )

    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('maquinas', 'data_registro');
    await queryInterface.removeColumn('maquinas', 'data_att');
    await queryInterface.removeColumn('maquinas', 'data_proxima_att');
    await queryInterface.removeColumn('maquinas', 'tipo');
    
    
  }
};
