//All the logic we need to connect to redis & postgress

const keys = require('./keys');

//Express App setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.unsubscribe(bodyParser.json());

