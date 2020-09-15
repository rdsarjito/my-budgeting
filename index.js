const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Income');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json({
  limit: '5mb'
}));

require('./routes/incomeRoutes')(app);

const PORT = 5000;
app.listen(PORT);