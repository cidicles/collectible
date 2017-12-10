'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const locales = ['en_us'];

const CollectibleSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the collectible'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  locale: {
    type: [{
      type: String,
      enum: locales
    }],
    default: ['en_us'],
    required: 'Please enter the locale of the collectible'
  }
});

module.exports = mongoose.model('Collectible', CollectibleSchema);
