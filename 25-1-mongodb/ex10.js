db.vendas.aggregate([
  {
    $group: {
      "_id": "$clienteId",
      "totalPurchases": {
        $sum: 1
      }
    }
  },
  {
    $match: {
      "totalPurchases": {
        $gt: 5
      }
    }
  },
  {
    $count: "clientes"
  }
]);
