const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  ibukota: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  collection: 'prov_path' // Change this to your actual collection name
});

module.exports = mongoose.model('Data', dataSchema);
