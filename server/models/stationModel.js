const mongoose = require("mongoose");
const stationSchema = mongoose.Schema({
  stationId: {
    type: Number,
    required: true,
  },
  airplaneId: {
    type: Number,
    required: false,
  },
  stationName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Station", stationSchema);
