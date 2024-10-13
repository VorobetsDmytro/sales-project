export const CUSTOMERS_API_URL = process.env.CUSTOMERS_API_URL || '';
export const PRODUCTS_API_URL = process.env.PRODUCTS_API_URL || '';

export const API_PATHS = {
  customer: {
    getAllCustomers: () => `${CUSTOMERS_API_URL}/customers`,
  },
  products: {
    getAllProducts: () => `${PRODUCTS_API_URL}/products`,
  }
};
