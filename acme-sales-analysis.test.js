const {
  productsPurchased,
  topSellingProductByQuantity,
  usersWithOrders,
} = require('./acme-sales-analysis');

const products = [
  {
    id: 1,
    name: 'foo',
    price: 7,
  },
  {
    id: 2,
    name: 'bar',
    price: 2,
  },
  {
    id: 5,
    name: 'bazz',
    price: 1,
  },
];

const users = [
  {
    id: 1,
    name: 'moe',
  },
  {
    id: 2,
    name: 'larry',
  },
  {
    id: 3,
    name: 'curly',
  },
];

const orders = [
  {
    id: 1,
    productId: 1,
    quantity: 3,
    userId: 1,
  },
  {
    id: 2,
    productId: 1,
    quantity: 7,
    userId: 1,
  },
  {
    id: 3,
    productId: 5,
    quantity: 70,
    userId: 3,
  },
  {
    id: 3,
    productId: 5,
    quantity: 1,
    userId: 3,
  },
];

describe('productsPurchased function takes orders and products arrays and returns the info on all the products that were purchased', () => {
  const productInfo = [
    { id: 1, name: 'foo', price: 7 },
    { id: 5, name: 'bazz', price: 1 },
  ];

  test('productsPurchased function exists', () => {
    expect(productsPurchased).toBeDefined();
  });
  test('returns the info on all the products that were purchased', () => {
    expect(productsPurchased(orders, products)).toEqual(productInfo);
  });
});

describe('topSellingProductByQuantity takes orders and products arrays and returns top selling product by Quantity', () => {
  const productInfo = { id: 5, name: 'bazz', price: 1 };

  test('topSellingProductByQuantity function exists', () => {
    expect(topSellingProductByQuantity).toBeDefined();
  });
  test('returns top selling product by Quantity', () => {
    expect(topSellingProductByQuantity(orders, products)).toEqual(productInfo);
  });
});

describe('usersWithOrders takes users and orders arrays and returns info of the users who placed orders', () => {
  const usersWhoOrdered = [{ id: 1, name: 'moe' }, { id: 3, name: 'curly' }];

  test('usersWithOrders function exists', () => {
    expect(usersWithOrders).toBeDefined();
  });
  test('returns info of the users who placed orders', () => {
    expect(usersWithOrders(users, orders)).toEqual(usersWhoOrdered);
  });
});
