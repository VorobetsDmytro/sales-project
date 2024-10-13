'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        name: 'John Doe',
        address: '123 Main Street',
      },
      {
        name: 'Jane Smith',
        address: '456 Park Avenue',
      },
      {
        name: 'Mike Johnson',
        address: '789 Broadway',
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
