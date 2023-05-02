'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('maquinas', 'modelo',{ 
      type: Sequelize.STRING,
      allowNull: true
    },
    await queryInterface.addColumn('maquinas', 'num_serie:',{ 
      type: Sequelize.STRING,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'centro_custo',{ 
      type: Sequelize.STRING,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'fabricante',{ 
      type: Sequelize.STRING,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'data_fabricacao',{ 
      type: Sequelize.DATEONLY,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'data_compra',{ 
      type: Sequelize.DATEONLY,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'data_instalacao',{ 
      type: Sequelize.DATEONLY,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'data_sop',{ 
      type: Sequelize.DATEONLY,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'valor',{ 
      type: Sequelize.FLOAT,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'especia_qc',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'especia_ehs',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'especia_eng',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'especia_cliente',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'data_garantia',{ 
      type: Sequelize.DATEONLY,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'entrega_lista_treinamento',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'entrega_manual',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'entrega_lista_componentes',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'entrega_spare_parts',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'entrega_software',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'entrega_calendario_preventivas',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'entrega_procedimentos',{ 
      type: Sequelize.BOOLEAN,
      allowNull: true
    }),

    await queryInterface.addColumn('maquinas', 'classificacao',{ 
      type: Sequelize.STRING,
      allowNull: true
    }),

    /*data_registro:{
        type: Sequelize.DATEONLY
      },

      data_att:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      data_proxima_att:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },

      responsavel:{
        type: Sequelize.INTEGER
      },

      tipo:{
        type: Sequelize.INTEGER
      },*/

    )

    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('maquinas', 'modelo');
    await queryInterface.removeColumn('maquinas', 'num_serie');
    await queryInterface.removeColumn('maquinas', 'centro_custo');
    await queryInterface.removeColumn('maquinas', 'fabricante');
    await queryInterface.removeColumn('maquinas', 'data_fabricacao');
    await queryInterface.removeColumn('maquinas', 'data_compra');
    await queryInterface.removeColumn('maquinas', 'data_instalacao');
    await queryInterface.removeColumn('maquinas', 'data_sop');
    await queryInterface.removeColumn('maquinas', 'valor');
    await queryInterface.removeColumn('maquinas', 'especia_qc');
    await queryInterface.removeColumn('maquinas', 'especia_ehs');
    await queryInterface.removeColumn('maquinas', 'especia_eng');
    await queryInterface.removeColumn('maquinas', 'especia_cliente');
    await queryInterface.removeColumn('maquinas', 'data_garantia');
    await queryInterface.removeColumn('maquinas', 'entrega_lista_treinamento');
    await queryInterface.removeColumn('maquinas', 'entrega_manual');
    await queryInterface.removeColumn('maquinas', 'entrega_lista_componentes');
    await queryInterface.removeColumn('maquinas', 'entrega_spare_parts');
    await queryInterface.removeColumn('maquinas', 'entrega_software');
    await queryInterface.removeColumn('maquinas', 'entrega_calendario_preventivas');
    await queryInterface.removeColumn('maquinas', 'entrega_procedimentos');
    await queryInterface.removeColumn('maquinas', 'classificacao');
  }
};
