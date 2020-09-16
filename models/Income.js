const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
  incomeName: String,
  incomeNominal: String,
  incomeDate: Date,
});

mongoose.model('incomes', incomeSchema);