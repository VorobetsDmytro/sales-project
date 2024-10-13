'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {customerId: 1, orderDate: new Date(), total: 1200},
      {customerId: 1, orderDate: new Date(), total: 1000},
      {customerId: 2, orderDate: new Date(), total: 950},
      {customerId: 3, orderDate: new Date(), total: 1100},
      {customerId: 4, orderDate: new Date(), total: 1050},
      {customerId: 6, orderDate: new Date(), total: 980},
      {customerId: 8, orderDate: new Date(), total: 1150},
      {customerId: 9, orderDate: new Date(), total: 1070},
    ]);
    
    await queryInterface.bulkInsert('orderItems', [
      { orderId: 1, productId: 1, quantity: 2, unitPrice: 20 },
      { orderId: 1, productId: 2, quantity: 5, unitPrice: 15 },
      { orderId: 1, productId: 3, quantity: 1, unitPrice: 45 },
      { orderId: 2, productId: 1, quantity: 3, unitPrice: 18 },
      { orderId: 2, productId: 4, quantity: 2, unitPrice: 30 },
      { orderId: 2, productId: 5, quantity: 4, unitPrice: 10 },
      { orderId: 3, productId: 6, quantity: 3, unitPrice: 22 },
      { orderId: 3, productId: 7, quantity: 1, unitPrice: 50 },
      { orderId: 4, productId: 2, quantity: 2, unitPrice: 25 },
      { orderId: 4, productId: 9, quantity: 3, unitPrice: 40 },
      { orderId: 5, productId: 10, quantity: 1, unitPrice: 60 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orderItems', null, {});
    await queryInterface.bulkDelete('orders', null, {});
  }
};
