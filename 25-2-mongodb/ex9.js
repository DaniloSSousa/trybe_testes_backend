db.vendas.aggregate([
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
    $unwind: "$itens"
  },
  {
    $match: {
      "itens.nome": "QUEIJO PRATO"
    }
  },
  {
    $group: {
      _id: "$clienteId",
      "totalConsumed": {
        $sum: "$itens.quantidade"
      }
    }
  },
  {
    $sort: {
      "totalConsumed": -1
    }
  },
  {
    $limit: 1
  },
  {
    $lookup: {
      "from": "clientes",
      "localField": "_id",
      "foreignField": "clienteId",
      "as": "customer"
    }
  },
  {
    $unwind: "$customer"
  },
  {
    $project: {
      "_id": 0,
      "nome": "$customer.nome",
      "uf": "$customer.endereco.uf",
      "totalConsumido": "$totalConsumed"
    }
  }
]).pretty();
