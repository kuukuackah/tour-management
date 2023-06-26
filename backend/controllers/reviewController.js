import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const creatReview = async(req,res)=>{

   const tourId = req.params.tourId
   const newReview = new Review({...req.body})
    
    try {
        
    } catch (error) {
        
    }
}