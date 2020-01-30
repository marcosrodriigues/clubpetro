module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preco: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      data: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clientes',
          key: 'id'
        }
      },
      frentistaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'frentistas',
          key: 'id'
        }
      }
  })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('vendas');
  }
};
