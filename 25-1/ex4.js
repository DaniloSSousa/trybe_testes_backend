db.clientes.aggregate([
  {
    $match: {
      "endereco.uf": "SC"
    }
  },
  { 
    $group: {
      "_id": "$endereco.uf",
      "totalCustomers": {
        $sum: 1
      }
    }
  }
]);
