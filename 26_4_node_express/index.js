const express = require('express');
const simpsons = require('./routes/simpsons');
const {
  getPing,
  postHello,
  putNameAge,
  notFound,
  internalError
} = require('./middlewares');

const app = express();

app.use(express.json());

// routes
app.get('/ping', getPing);

app.post('/hello', postHello);

app.put('/users/:name/:age', putNameAge);

app.use('/simpsons', simpsons);

app.use('*', notFound);

app.use(internalError);

app.listen(3000);
