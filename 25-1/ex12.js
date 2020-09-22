db.clientes.aggregate([
  {
    $lookup: {
      "from": "vendas",
      "let": { customerId: "$clienteId" },
      "pipeline": [
        {
          $match: {
            $expr: {
              $eq: [ "$$customerId", "$clienteId" ]
            },
            "dataVenda": {
              $gte: ISODate("2020-01-01"),
              $lte: ISODate("2020-12-31")
            }
          }
        },
        {
          $project: {
            "_id": 0,
            "customerIdOrder": "$clienteId"
          }
        }
      ],
      "as": "orders"
    }
  },
  {
    $unwind: "$orders"
  },
  {
    $group: {
      "_id": "$endereco.uf",
      "purchases": {
        $sum: 1
      }
    }
  },
  {
    $project: {
      "_id": 0,
      "totalCompras": "$purchases",
      "uf": "$_id"
    }
  },
  {
    $sort: {
      "totalCompras": -1
    }
  },
  {
    $limit: 3
  }
]);
