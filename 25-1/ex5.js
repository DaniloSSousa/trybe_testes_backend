db.clientes.aggregate([
  { 
    $group: {
      "_id": "$sexo",
      "totalGender": {
        $sum: 1
      }
    }
  }
]);
