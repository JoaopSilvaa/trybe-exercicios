'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Products', 'valu', {});
    await queryInterface.addColumn('Products', 'value', {
      type: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'value', {});
    await queryInterface.addColumn('Products', 'valu', {
      type: Sequelize.INTEGER,
    });
  }
};
