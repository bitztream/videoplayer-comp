const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.get('/api/get', controller.avatar.get);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`listening on port ${port}!`));
