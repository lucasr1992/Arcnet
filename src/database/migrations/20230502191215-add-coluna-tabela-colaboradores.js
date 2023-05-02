'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('colaboradores', 'niveis_id',
    { 
      type: Sequelize.INTEGER,
      allowNull:false,
      references:{ model: "niveis", key: 'id'},
      onUpdate:'CASCADE',
      onDelete:'RESTRICT' 
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('colaboradores', 'niveis_id');
     
  }
};
