'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('maquinas', 'responsavel_id',
    { 
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{ model: "colaboradores", key: 'id'},
      onUpdate:'CASCADE',
      onDelete:'RESTRICT' 
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('maquinas', 'responsavel_id');
  }
};
