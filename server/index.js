//All the logic we need to connect to redis & postgress

const keys = require('./keys');

//Express App setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.unsubscribe(bodyParser.json());

//Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.password,
  port: keys.pgPort,
});

pgClient.on('error', () => console.log('Lost pg connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch((err) => console.log(err));

