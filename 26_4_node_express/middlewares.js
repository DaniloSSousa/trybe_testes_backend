const { readFile, writeFile } = require('fs').promises;

const getPing = (_req, res) =>
  res.status(200)
    .json({ "message": "Pong!" });

const postHello = (req, res) => {
  const { name, age } = req.body;
  return (
    age > 17
      ?
      res.status(200)
        .json({ "message": `Hello, ${name}!` })
      :
      res.status(401)
        .json({ "message": "Unauthorized" })
  );
};

const putNameAge = (req, res) => {
  const { name, age } = req.params;
  return res.status(200)
    .json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
};

const getSimpsons = async (_req, res) => {
  const data = await readFile('simpsons.json', 'utf-8');
  return res.status(200)
    .json(
      JSON.parse(data)
        .map((chars) => chars.name)
    );
};

const getSimpsonsId = async (req, res) => {
  const { id } = req.params;
  const data = await readFile('simpsons.json', 'utf-8');
  const char = JSON.parse(data)
    .filter((chars) => chars.id === id);
  return (
    char.length !== 0
      ?
      res.status(200)
        .send(char[0].name)
      :
      res.status(500)
        .json(char)
  );
};

const postSimpsons = async (req, res) => {
  const { id, name } = req.body;
  const data = await readFile('simpsons.json', 'utf-8');
  const dataParsed = JSON.parse(data);
  const writeChar = async () => {
    dataParsed.push({ id, name });
    await writeFile('simpsons.json', JSON.stringify(dataParsed));
    return dataParsed;
  };

  return (
    dataParsed.some((chars) => chars.id === id)
      ?
      res.status(400)
        .send('Não foi possível cadastrar, id já existe.')
      :
      res.status(200)
        .json(await writeChar())
  );
};

const notFound = (_req, res) =>
  res.status(404)
    .send('Página não encontrada.');

const internalError = (err, _req, res, _next) =>
  res.status(500)
    .send(`:( Erro interno: ${err.message}`);

module.exports = {
  getPing,
  postHello,
  putNameAge,
  getSimpsons,
  getSimpsonsId,
  postSimpsons,
  notFound,
  internalError
};
