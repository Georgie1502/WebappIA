const destinations = require('../data/destinations.json')

class Destination {
  static findAll() {
    return destinations
  }

  static findById(id) {
    return destinations.find((d) => d.id === id) || null
  }
}

module.exports = Destination
