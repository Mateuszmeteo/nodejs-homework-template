const app = require('./app')
const mongoose = require('mongoose');


require('dotenv').config();

const PORT = process.env.PORT || 3000;
const uriDb = process.env.CONECTION__STRING;

const connection = mongoose.connect(uriDb, { dbName: "db-contacts" });


connection
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  })



  // app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })