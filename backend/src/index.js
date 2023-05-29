require('dotenv').config();
const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");


mongoose.connect(process.env.MONGODB_URL, config.mongoose.options).then(() => {

  console.log("Connected to MongoDB");

});

// Start the Node server
app.listen(process.env.PORT_NO || 8082, () => {
  console.log(`App is running on port ${config.port}`);
});
