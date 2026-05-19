const Destination = require('../models/Destination')

exports.getAll = (req, res) => {
  const destinations = Destination.findAll()
  res.json({ success: true, data: destinations })
}

exports.getById = (req, res) => {
  const dest = Destination.findById(req.params.id)
  if (!dest) return res.status(404).json({ success: false, message: 'Destination not found' })
  res.json({ success: true, data: dest })
}
