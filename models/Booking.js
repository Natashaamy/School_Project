const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  time: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: false
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
