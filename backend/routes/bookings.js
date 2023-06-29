import express from  'express';

import { verifyUser, verifyAdmin } from '../utils/verfyToken.js';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';

 const router = express.Router()

router.post('/', createBooking)
router.get('/:id', getBooking)
router.get('/', verifyAdmin, getAllBooking)
 export default router;