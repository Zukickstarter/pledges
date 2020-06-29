const { initializeDatabase } = require('./db.js');

initializeDatabase()
  .then(() => {
    console.log('database initialized');
  })
  .catch((err) => {
    console.log('error intitializing db: ', err);
  });

