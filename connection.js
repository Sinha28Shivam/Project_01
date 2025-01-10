require('dotenv').config();
const mongoose = require("mongoose");

// Connect to MongoDB

async function connectMOngoDb() {
    const url = process.env.MONGO_URI;
    try {
      await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Connected to MongoDB Atlas");
    } catch (err) {
      console.error("Error connecting to MongoDB Atlas", err);
    }
  }

module.exports = {
    connectMOngoDb
}