'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('maquinas', 'desativador_id',
    { 
      type: Sequelize.INTEGER,
      allowNull:true,
      references:{ model: "colaboradores", key: 'id'},
      onUpdate:'CASCADE',
      onDelete:'RESTRICT' 
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('maquinas', 'desativador_id');
  }
};
