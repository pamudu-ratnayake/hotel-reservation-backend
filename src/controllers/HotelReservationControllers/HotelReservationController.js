let HotelReservation = require("../../models/HotelReservationModels/HotelReservation");

exports.postHotelReservation = (req, res, next) => {
    const hotel_name = req.body.hotel_name;
    const location = req.body.location;
    const room_type = req.body.room_type;
    const room_size = req.body.room_size;
    const facilities = req.body.facilities;
    const con_number = req.body.con_number;
    const email = req.body.email;
    const description = req.body.description;

    const newHotelReservation = new HotelReservation({
      hotel_name,
      location,
      room_type,
      room_size,
      facilities,
      con_number,
      email,
      description
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
    const { hotel_name, location, room_type, room_size, facilities, con_number, email, description } = req.body;

    const hotelReservationUpdate = {
      hotel_name,
      location,
      room_type,
      room_size,
      facilities,
      con_number,
      email,
      description
    };

    const update = await HotelReservation.findByIdAndUpdate({_id : hotel_id}, hotelReservationUpdate)
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
      
    await HotelReservation.findOne({ _id: hotel_id })
      .then((hotelReservation) => {
        res.json(hotelReservation);
      })
      .catch((err) => {
        console.log(err);
      });
  };
