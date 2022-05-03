let HotelReservation = require("../../models/HotelReservationModels/HotelReservation");

exports.postHotelReservation = (req, res, next) => {
    const hotel_name = req.body.hotel_name;
    const location = req.body.location;
    const room_type = req.body.room_type;
    const no_of_rooms = req.body.no_of_rooms;
    const booking_date = req.body.booking_date;
    const end_date = req.body.end_date;
    const no_of_dates = req.body.no_of_dates;
    const additional_notes = req.body.additional_notes;

    const newHotelReservation = new HotelReservation({
      hotel_name,
      location,
      room_type,
      no_of_rooms,
      booking_date,
      end_date,
      no_of_dates,
      additional_notes
    });

    newHotelReservation.save()
    .then(() => {
        res.json("Hotel Reserved Successfully!");
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.getHotelReservation = (req, res, next) => {
    HotelReservation.find()
    .then((hotelReservation) => {
        res.json(hotelReservation);
    })
    .catch((err) => {
        console.log(err);
    })
};

exports.updateHotelReservation = async (req, res) => {
    let hotel_id = req.params.hotel_id;
    const { hotel_name, location, room_type, no_of_rooms, booking_date, end_date, no_of_dates, additional_notes } = req.body;

    const hotelReservationUpdate = {
      hotel_name,
      location,
      room_type,
      no_of_rooms,
      booking_date,
      end_date,
      no_of_dates,
      additional_notes
    };

    const update = await HotelReservation.findByIdAndUpdate(hotel_id, hotelReservationUpdate)
    .then(() => {
        res.status(200).send({ status: "Hotel Reservation Updated!" });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error! Cannot Update!" });
        console.log(err.message);
      });
}

exports.deleteHotelReservation = async (req, res) => {
    let hotel_id = req.params.hotel_id;
  
    await HotelReservation.findByIdAndDelete(hotel_id)
      .then(() => {
        res.status(200).send({ status: "Hotel Reservation Deleted!" });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error! Cannot Delete!" });
        console.log(err.message);
      });
  };

  exports.getOneHotelReservation = async (req, res) => {
    let hotel_id = req.params.hotel_id;
  
    await HotelReservation.findOne({ hotel_id })
      .then((hotelReservation) => {
        res.json(hotelReservation);
      })
      .catch((err) => {
        console.log(err);
      });
  };