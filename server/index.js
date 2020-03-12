const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
// app.get('/', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`listening on port ${port}!`));
