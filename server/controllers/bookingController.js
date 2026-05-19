const Booking = require('../models/Booking')
const Destination = require('../models/Destination')

exports.create = (req, res) => {
  const { name, email, destination, date, travelers, message } = req.body

  if (!name || !email || !destination || !date) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }

  const dest = Destination.findById(destination)
  if (!dest) return res.status(404).json({ success: false, message: 'Destination not found' })

  const booking = Booking.create({ name, email, destination, date, travelers, message })
  res.status(201).json({ success: true, data: booking })
}

exports.getAll = (req, res) => {
  const bookings = Booking.findAll()
  res.json({ success: true, data: bookings })
}
