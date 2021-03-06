// schema/mongoose.js
// import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an object that shows
// the shape of your database entries.
const ProducersSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  localGovernment: { type: String, required: true },
  address: { type: String, required: true },
  typeOfProducts: { type: Array },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  deletedAt: { type: Date }

}, { versionKey: false });

// export our module to use in server.js
module.exports = mongoose.model('Producer', ProducersSchema);
