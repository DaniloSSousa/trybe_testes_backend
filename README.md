## Mongodb queries exercises

**1**: Use a combination of arithmetic expressions and add a field called age to the customers collection. Some tips:
- Round the age value down;
- Calculate age using the difference between the current date and the date of birth;
- 1 day is equal to 86400000 milliseconds.

**2**: Using the new age field, count how many customers are between 18 and 25 years old.

**3**: Remove the $ count and $ match stages from the previous exercise and add a stage in the pipeline that places the customer's purchases in the purchases field.

**4**: Select ALL customers who purchased between June 2019 and March 2020.

**5**: Check the number of documents returned by the pipeline with the itcount () method. By now you should have 486 documents being returned.

**6**: Leave only the top 10 customers with more purchases in that period.

**7**: For these customers, add a field called Compras.valorComDesconto in all purchases in the period, applying 10% discount on the total purchase amount (Total value).

**8**: Still in this pipeline, discover the 5 states with the most purchases.

**9**: Discover the customer who consumed the most CHEESE PRATO. Return a document with the following structure:
```
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
```

**10**: Select all sales in March 2020, with SEPARATE status. Add a field called dataEntregaPrevista with a value equal to three days after the date of sale. Return only the fields customerId, dateSale and dateDeliveryDelivery.

## Bonus

**11**: Calculate the absolute difference in days between the date of the first scheduled delivery and the last, considering the pipeline for exercise 10.

:)
