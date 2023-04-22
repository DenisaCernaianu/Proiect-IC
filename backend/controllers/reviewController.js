import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReview = async(req, res) =>{

    const tourId = req.params.tourId
    const newReview = new Review({...req.body})
    try {
        const savedReview = await newReview.save()

        //after creating a new review, update the reviews array

        await Tour.findByIdAndUpdate(tourId, {
            $push: {reviews: savedReview._id}
        })

        res.status(200).json({success:true, message:"review submitted", data: savedReview})
    } catch (err) {
        res.status(500).json({success:false, message:"failed to be submitted"})
    }
}