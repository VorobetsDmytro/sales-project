'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      { name: 'Desk Lamp', price: 19.99, inventory: 105 },
      { name: 'External SSD', price: 149.99, inventory: 15 },
      { name: 'Smartphone Stand', price: 14.99, inventory: 90 },
      { name: 'Wireless Mouse', price: 25.99, inventory: 120 },
      { name: 'Bluetooth Headphones', price: 59.99, inventory: 60 },
      { name: 'USB-C Hub', price: 19.99, inventory: 35 },
      { name: '4K Monitor', price: 399.99, inventory: 30 },
      { name: 'Gaming Chair', price: 299.99, inventory: 8 },
      { name: 'Webcam', price: 49.99, inventory: 220 },
      { name: 'Laptop Cooling Pad', price: 29.99, inventory: 110 },
      { name: 'Mechanical Keyboard', price: 89.99, inventory: 75 },
      { name: 'Ergonomic Mouse Pad', price: 12.99, inventory: 120 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
