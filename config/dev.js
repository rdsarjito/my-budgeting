const dotenv = require('dotenv').config({ path: './.env.development' }).parsed;
module.exports = {
  mongoURI: dotenv.MONGO_URI
};