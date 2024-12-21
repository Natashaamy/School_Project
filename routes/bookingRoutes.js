const express = require('express');
const {
  addBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');

const router = express.Router();

// Add a new booking
router.post('/', addBooking);

// Get all bookings  
router.get('/', getAllBookings);

// Get a booking by ID
router.get('/:id', getBookingById);

// Update a booking
router.put('/:id', updateBooking);

// Delete a booking
router.delete('/:id', deleteBooking);

module.exports = router;
