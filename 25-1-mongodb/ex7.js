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
  },
  {
    $project: {
      "_id": 0,
      "estado": "$_id.uf",
      "sexo": "$_id.sexo",
      "total": "$totalGender"
    }
  }
]);
