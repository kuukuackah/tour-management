import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';

const router = express.Router();

// Create new Tour
router.post('/', createTour);

// update new Tour
router.put('/:id', updateTour);

// delete  Tour
router.delete('/:id', deleteTour);

// get single Tour
router.get('/:id', getSingleTour);

// get all Tour
router.get('/', getAllTour);

// get tour by search
router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getFeaturedTour",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);

export default router;
 