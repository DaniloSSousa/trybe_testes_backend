db.vendas.aggregate([
  {
    $match: {
      "status": {
        $in: [ "ENTREGUE", "EM SEPARACAO" ]
      }
    }
  },
  {
    $group: {
      "_id": "$clienteId",
      "totalSpend": {
        $sum: "$valorTotal"
      }
    }
  },
  {
    $sort: {
      "totalSpend": -1
    }
  },
  {
    $limit: 5
  }
]);
