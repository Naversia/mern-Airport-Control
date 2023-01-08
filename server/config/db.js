const { LoggerLevel } = require("mongodb");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //const uri ="mongodb+srv://thelosttribess:FAzvK4HSt3iNG2R@flight-control.ugvl4pe.mongodb.net/flight-control?retryWrites=true&w=majority";
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    return conn;
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
