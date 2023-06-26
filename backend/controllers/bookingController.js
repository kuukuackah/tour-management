import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    newBooking.save;
    const savedBooking = await newBooking.save();
    res
      .status(200)
      .json({
        success: true,
        message: "your tour is booked",
        data: savedBooking
      });
  } catch (error) {
    res
    .status(500)
    .json({
      success: true,
      message: "internal sever error"
    });
  }
};
