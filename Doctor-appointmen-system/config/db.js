const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("    await mongoose.connect("mongodb+srv://learning:GQYt8dQLYgclgYOx@cluster0.t6fgp1f.mongodb.net/doctor-app");
");
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
