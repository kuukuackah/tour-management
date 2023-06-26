 import express from  'express';
import { creatReview } from '../controllers/reviewController.js';

 const router = express.Router()

router.post('/:tourId', creatReview)
 export default router