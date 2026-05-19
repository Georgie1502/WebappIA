// In-memory store for MVP — swap for a real DB in production
const bookings = []
let nextId = 1

class Booking {
  static create({ name, email, destination, date, travelers, message }) {
    const booking = {
      id: nextId++,
      name,
      email,
      destination,
      date,
      travelers: Number(travelers) || 1,
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    bookings.push(booking)
    return booking
  }

  static findAll() {
    return bookings
  }

  static findById(id) {
    return bookings.find((b) => b.id === Number(id)) || null
  }
}

module.exports = Booking
