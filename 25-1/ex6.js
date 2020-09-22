db.clientes.aggregate([
  { 
    $group: {
      "_id": {
        sexo: "$sexo",
        uf: "$endereco.uf"
      },
      "totalGender": {
        $sum: 1
      }
    }
  }
]);
