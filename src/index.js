const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());                            // Lida com requisições no formato JSON
app.use(express.urlencoded({ extended: true }));    // Lida com requisições no formato de URL
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3333);
