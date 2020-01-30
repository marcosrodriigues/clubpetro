const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())
app.use(routes);

app.listen(3000);


const db = require('./app/models');
db.sequelize.sync({force: true}).then(function () {});
