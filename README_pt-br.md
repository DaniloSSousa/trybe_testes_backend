## Exercícios de node e express

**1** - Inicie os exercícios criando uma aplicação NodeJS, com os comandos já aprendidos.

**2** - Crie uma aplicação express que receba uma requisição do tipo GET no caminho /ping e retorne o JSON { "message": "Pong!" }.

**3** - Crie um endpoint que receba requisições do tipo POST no caminho /hello, contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" }.

**4** - Crie um endpoint que receba requisições do tipo POST no caminho /hello, contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" }. Caso o usuário tenha idade superior a 17 anos, retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200. Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401.

**5** - Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" }.

**6** - Agora você vai criar uma API de listagem dos personagens da série Simpsons. Como fonte de dados, você vai utilizar um arquivo JSON.

Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
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
- Utilize o modulo fs do Node para ler/escrever arquivos.
- Caso algo dê errado em nível de código, deve ser retornado um código 500 (Internal Server Error).
- Caso dê tudo certo, a resposta deve voltar com status 200 OK.
- Foque os contratos das APIs (o que elas devem receber e o que devem retornar).
- Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman e Insomnia.

**7** - Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.

**8** - Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.

- Caso não exista nenhum personagem com o id especificado, deve ser retornado um array vazio.

**9** - Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.

- O corpo da requisição deve receber os campos id e name.

**Bônus**: A operação só deve ser realizada caso o campo id seja único. Caso contrário, deve ser retornado status 400.
