'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      }, 
      customerId: {
        type: Sequelize.BIGINT,
      }, 
      orderDate: {
        type: Sequelize.DATE,
      }, 
      total: {
        type: Sequelize.FLOAT,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};