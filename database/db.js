const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('database connection successful');
  })
  .catch((err) => {
    console.log('database connection failuer', err);
  });
