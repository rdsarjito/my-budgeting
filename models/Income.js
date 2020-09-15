const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
  incomeName: String,
  incomeNominal: String,
});

mongoose.model('incomes', incomeSchema);