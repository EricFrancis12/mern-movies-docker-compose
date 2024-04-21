const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo:27017/cinema';

const connectWithRetry = () => {
  mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => console.log('Connected to DB'))
    .catch(e => {
      console.error('Connection error', e.message);
      setTimeout(connectWithRetry, 5000);
    });
}
connectWithRetry();

const db = mongoose.connection;

module.exports = db;
