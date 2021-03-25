const { Schema, model, ObjectId } = require('mongoose')


const VacationSchema = new Schema({
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

module.exports = model('Vacation', VacationSchema)