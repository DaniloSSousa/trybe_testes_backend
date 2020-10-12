## Node and express exercises

**1** - Start the exercises by creating a NodeJS application, with the commands already learned.

**2** - Create an express application that receives a GET request on the path / ping and returns JSON {"message": "Pong!" }.

**3** - Create an endpoint that receives POST requests in the / hello path, containing JSON {"name": "<user name>"} and return a JSON {"message": "Hello, <user name>! " }.

**4** - Create an endpoint that receives POST requests in the / hello path, containing JSON {"name": "<user name>", "age": "<user age>"}. If the user is over 17 years old, return a JSON {"message": "Hello, <user name>!" } with status code 200. Otherwise, return JSON {"message": "Unauthorized"} with status code 401.

**5** - Create an endpoint that receives requests of type PUT in the path / users /: name /: age and return JSON {"message": "Your name is and you are years old"}.

**6** - Now you are going to create an API for listing the Simpsons characters. As a data source, you will use a JSON file.

Create a file called simpsons.json and populate it with the following data:
```
[
  {
  "id": "1",
  "name": "Homer Simpson"
  },
  {
  "id": "2",
  "name": "Marge Simpson"
  },
  {
  "id": "3",
  "name": "Bart Simpson"
  },
  {
  "id": "4",
  "name": "Lisa Simpson"
  },
  {
  "id": "5",
  "name": "Maggie Simpson"
  },
  {
  "id": "6",
  "name": "Ned Flanders"
  },
  {
  "id": "7",
  "name": "Montgomery Burns"
  },
  {
  "id": "8",
  "name": "Nelson Muntz"
  },
  {
  "id": "9",
  "name": "Krusty"
  },
  {
  "id": "10",
  "name": "Milhouse Van Houten"
  }
]
```
- Use the Node fs module to read / write files.
- If something goes wrong at the code level, a code 500 (Internal Server Error) must be returned.
- If everything goes well, the answer should return with a status of 200 OK.
- Focus on API contracts (what they should receive and what they should return).
- To test your API during development, use tools that allow you to make HTTP requests, such as Postman and Insomnia.

**7** - Create a GET type endpoint in the route / simpsons that should return the complete list of characters.

**8** - Create a GET type endpoint in the route / simpsons /: id which should only return the character with the id informed in the request URL.

- If there is no character with the specified id, an empty array must be returned.

**9** - Create a POST type endpoint in the route / simpsons that will be responsible for registering new characters.

- The request body must receive the id and name fields.

**Bonus**: The operation should only be performed if the id field is unique. Otherwise, status 400 should be returned.
