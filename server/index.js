const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();
const port = 8080;
const HOST = '0.0.0.0';
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.get('/api/get', controller.avatar.get);

// eslint-disable-next-line no-console
app.listen((port, HOST), () => console.log(`listening on http://${HOST}:${port}!`));
