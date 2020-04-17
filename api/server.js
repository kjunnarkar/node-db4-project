const express = require('express');
const morgan = require('morgan');

const RecipeRouter = require('./recipe-router');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
    res.send('Recipes API is running');
});

module.exports = server;
