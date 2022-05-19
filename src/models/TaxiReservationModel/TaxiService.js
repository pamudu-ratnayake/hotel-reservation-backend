const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taxiDetails = new Schema({
  Pick_up_point: {
    type: String,
    required: true,
  },
  Where_to: {
    type: String,
    required: true,
  },
  Pich_up_time: {
    type: String,
    required: true,
  },
  vehicle_type: {
    type: String,
    required: true,
  },
  Delivery_notes: {
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