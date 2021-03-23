const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VacationSchema = new Schema({
  name: {
    type: String
  },
  Continent: {
    type: String
  },
  activities: {
      type: String
  },
  passport: {
    type: Boolean
  }
}, {
    collection: 'vacation'
  })

module.exports = mongoose.model('Vacation', vacationSchema)