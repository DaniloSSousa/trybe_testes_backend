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
              $gte: ISODate("2019-01-01"),
              $lte: ISODate("2019-12-31")
            }
          }
        },
        {
          $project: {
            "_id": 0,
            "totalSales": "$valorTotal"
          }
        }
      ],
      "as": "sales"
    }
  },
  {
    $unwind: "$sales"
  },
  {
    $group: {
      "_id": "$endereco.uf",
      "mediaVendas": {
        $avg: "$sales.totalSales"
      },
      "totalVendas": {
        $sum: 1
      }
    }
  },
  {
    $project: {
      "mediaVendas": 1,
      "totalVendas": 1
    }
  },
  {
    $sort: {
      "_id": 1
    }
  }
]);
