## Mongodb queries exercises

1: Using the $ match stage, write an aggregation to return only customers of the "MALE" gender.

2: Using the $ match stage, write an aggregation to return only customers of the gender "FEMALE" and with birth data between the years 1995 and 2005.

3: Using the $ correspondence stage, write an aggregation to return only customers of the gender "FEMALE" and with birth data between the years 1995 and 2005, limiting the number of documents returned to 5.

4: Count how many SC state customers are in the collection. Return a document where the _id field contains the UF and another field with the total.

5: Group customers by gender. Return the total number of customers of each sex in the total field.

6: Group customers by gender and uf. Return the total number of customers of each sex in the total field.

7: Use the same aggregation as in the previous exercise, perform a projection stage to modify the output documents, so that they look like the document below (don't mind the order of the fields):
```
{
  "estado": "SP",
  "sexo": "MASCULINO",
  "total": 100
}
```

8: Find out which 5 customers have spent the most.

9: Find out which are the 10 customers who spent the highest amount in 2019.

10: Find out how many customers have purchased more than 5 times. Return a document that contains only the customers field with the total customers.
Tip: The $ count operator can simplify your query.

11: Find out how many customers bought less than three times between January 2020 and March 2020.

12: Find out which three UFUs bought the most in 2020. Return the documents in the following format:
```
{
  "totalVendas": 10,
  "uf": "SP"
}
```

13: Find the total sales and average sales for each uf in 2019. Sort the results by the uf name. Return the documents in the following format:
```
{
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
}
```

:)
