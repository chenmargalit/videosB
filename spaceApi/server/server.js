const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiErrorHandler = require('../errors/api-error-handler');

const PORT = process.env.PORT || 3000;

const app = express();

const fetch = require('../routes/fetch');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', fetch);

app.use(apiErrorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
