'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderItems', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      }, 
      orderId: {
        type: Sequelize.BIGINT,
        references: {
          model: 'orders',
          key: 'id',
        },
      }, 
      productId: {
        type: Sequelize.BIGINT,
      }, 
      quantity: {
        type: Sequelize.STRING,
      }, 
      unitPrice: {
        type: Sequelize.FLOAT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orderItems');
  }
};