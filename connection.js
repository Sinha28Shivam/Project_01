const mongoose = require("mongoose");

// Connect to MongoDB

async function connectMOngoDb() {
    const url = "mongodb+srv://sinha28shivam:learningDatabaseDevShi@cluster0.i5bcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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