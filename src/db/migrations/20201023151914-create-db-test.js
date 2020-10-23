'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('db_tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
      },
      is_true: {
        type: Sequelize.BOOLEAN
      },
      integer_number: {
        type: Sequelize.INTEGER
      },
      decimal: {
        type: Sequelize.DECIMAL
      },
      date_only: {
        type: Sequelize.DATEONLY
      },
      date_time: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DbTests');
  }
};