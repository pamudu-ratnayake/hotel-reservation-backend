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
 
  Traveler_email: {
    type: String,
    required: true,
  },
  Traveler_contact_Number: {
    type: String,
    required: true,
  }

});

const Traveler = mongoose.model("Traveler Details", TravelerSchema);
module.exports = Traveler;

