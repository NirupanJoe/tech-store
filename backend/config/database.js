const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const { connection: { host } } = await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB is connected to the host: ${host} `)
  } catch (err) {
    console.log("Database Not Connected");
  }
}

module.exports = connectDatabase;