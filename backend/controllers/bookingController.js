import Booking from "../models/Booking.js"


//create new booking
export const createBooking = async(req,res) =>{

    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({success:true, message:"your tour is booked", data:savedBooking})
    } catch (err) {
        res.status(500).json({success:true, message:"internal server error"})
    }

};

//get single booking
export const getBooking = async(req, res) =>{
    const id = req.params.id

    try {
        const booking = await Booking.findById(id)

        res.status(200).json({success:true, message:"successful", data:booking})
    } catch (err) {
        res.status(404).json({success:true, message:"not found"})
    }
}

//get all bookings
export const getAllBooking = async(req, res) =>{

    try {
        const bookings = await Booking.find({})

        res.status(200).json({success:true, message:"successful", data:bookings})
    } catch (err) {
        res.status(500).json({success:true, message:"internal server error"})
    }
}
