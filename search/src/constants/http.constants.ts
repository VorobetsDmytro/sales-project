export const ORDERS_API_URL = process.env.ORDERS_API_URL || '';
export const PRODUCTS_API_URL = process.env.PRODUCTS_API_URL || '';
export const CUSTOMERS_API_URL = process.env.CUSTOMERS_API_URL || '';

export const API_PATHS = {
  orders: {
    getCustomerOrders: (customerId: number) => `${ORDERS_API_URL}/orders/${customerId}`,
  },
  products: {
    getProductById: (productId: number) => `${PRODUCTS_API_URL}/products/${productId}`,
    getAllProducts: () => `${PRODUCTS_API_URL}/products`,
  },
  customers: {
    getCustomerById: (customerId: number) => `${CUSTOMERS_API_URL}/customers/${customerId}`,
    getAllCustomers: () => `${CUSTOMERS_API_URL}/customers`,
  }
};
