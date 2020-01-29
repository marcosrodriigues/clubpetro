'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('frentista', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      }
  })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('frentista');
  }
};
