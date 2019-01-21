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
    if (QtyTotals[order.productId]) QtyTotals[order.productId] += order.quantity;
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

