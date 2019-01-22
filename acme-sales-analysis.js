//returns products that were purchased
function productsPurchased(orders, products) {
  const productIds = [];

  orders.forEach(order => {
    if (!productIds.includes(order.productId)) productIds.push(order.productId);
  });
  return products.filter(product => productIds.includes(product.id));
}

//returns top selling product
function topSellingProductByQuantity(orders, products) {
  let topSellerId;
  let topQty = 0;
  const QtyByProduct = orders.reduce((QtyTotals, order) => {
    if (QtyTotals[order.productId])
      QtyTotals[order.productId] += order.quantity;
    else QtyTotals[order.productId] = order.quantity;
    return QtyTotals;
  }, {});

  for (let key in QtyByProduct) {
    if (QtyByProduct[key] > topQty) topSellerId = parseInt(key);
  }
  return products.find(product => product.id === topSellerId);
}

// returns users that placed the orders
function usersWithOrders(users, orders) {
  let userIds = [];

  orders.forEach(order => {
    if (!userIds.includes(order.userId)) userIds.push(order.userId);
  });
  return users.filter(user => userIds.includes(user.id));
}

module.exports = {
  productsPurchased,
  topSellingProductByQuantity,
  usersWithOrders,
};


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

console.log('Products Purchased:\n',productsPurchased(orders, products));
console.log('Top Selling Product By Quantity:\n',topSellingProductByQuantity(orders, products));
console.log('Users With Orders:\n',usersWithOrders(users, orders));
