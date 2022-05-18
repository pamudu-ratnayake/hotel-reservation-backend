const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taxiDetails = new Schema({
  driver_name: {
    type: String,
    required: true,
  },
  vehicle_type: {
    type: String,
    required: true,
  },
  vehicle_name: {
    type: String,
    required: true,
  },
  vehicle_no: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    // required: false,
  },
  driver_con_no: {
    type: String,
    // required: true,
  },
  driver_description: {
    type: String,
    required: true,
  }
});

const Taxi = mongoose.model("Taxi", taxiDetails);

module.exports = Taxi;