const mongoose = require("mongoose");

const TravelerSchema = new mongoose.Schema({

  Traveler_Name: {
    type: String,
    require: true,
  },

  Traveler_ID: {
  type: String,
  required: true,
  },

  NIC: {
    type: String,
    required: true,
  },

    Address: {
      type: String,
      required: true,
  },
 
  Email: {
    type: String,
    required: true,
  },

  Contact_Number: {
    type: String,
    required: true,
  },

  CheckInDate: {
    type: String,
    // required: true,
  },

  numberOfNights: {
    type: String,
    required: true,
  },

  Room_Type: {
    type: String,
    required: true,
  },

  numberOfRooms: {
    type: String,
    required: true,
  },


});

const Traveler = mongoose.model("Traveler Details", TravelerSchema);
module.exports = Traveler;

