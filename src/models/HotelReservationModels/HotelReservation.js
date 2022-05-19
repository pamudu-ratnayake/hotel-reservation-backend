const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelReservation = new Schema({
  hotel_name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  room_type: {
    type: Array,
    // required: true,
  },
  room_size: {
    type: Array,
    // required: true,
  },
  facilities: {
    type: Array,
    // required: false,
  },
  price: {
    type: Number,
    // required: true,
  },
  con_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const HotelReservation = mongoose.model("HotelReservation", hotelReservation);

module.exports = HotelReservation;
