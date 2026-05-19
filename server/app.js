const express = require('express')
const cors = require('cors')

const destinationsRouter = require('./routes/destinations')
const bookingsRouter = require('./routes/bookings')
const chatRouter = require('./routes/chat')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/destinations', destinationsRouter)
app.use('/api/bookings', bookingsRouter)
app.use('/api/chat', chatRouter)

app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'TimeTravel API' }))

module.exports = app
