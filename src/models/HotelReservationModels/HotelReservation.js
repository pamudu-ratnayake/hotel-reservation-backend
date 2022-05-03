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
    type: String,
    required: true,
  },
  no_of_rooms: {
    type: String,
    required: true,
  },
  booking_date: {
    type: String,
    required: false,
  },
  end_date: {
    type: String,
    required: true,
  },
  no_of_dates: {
    type: String,
    required: true,
  },
  additional_notes: {
    type: String,
    required: true,
  }
});

const HotelReservation = mongoose.model("HotelReservation", hotelReservation);

module.exports = HotelReservation;
