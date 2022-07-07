'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Products', [
    {
      name: 'Moto G 3',
      value: 500,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      name: 'Iphone 13',
      value: 50000000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Products', null, {});
  }
};
