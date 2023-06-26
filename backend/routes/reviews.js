 import express from  'express';
import { creatReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verfyToken.js';

 const router = express.Router()

router.post('/:tourId',verifyUser, creatReview)
 export default router