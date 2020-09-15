const mongoose = require('mongoose');
const Income = mongoose.model('incomes');

module.exports = app => {
  app.post('/api/income', async (req, res) => {
    console.log(req.body)
    const { incomeName, incomeNominal } = req.body;
    const incomeDate = new Date();
    const newIncome = new Income({ incomeName, incomeNominal, incomeDate });

    const data = await newIncome.save();
    res.status(201).send(data);
  });

  app.get('/api/income', async (req, res) => {
    Income.find()
      .then(template => res.json(template));
  });
};