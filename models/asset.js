var mongoose = require('mongoose');

var assetSchema = new mongoose.Schema({
  asset_num: {
    type: Number,
    default: null
  },
  type: {
    type: String,
    default: null
  },
  purchase_date: {
    type: String,
    default: null
  },
  value: {
    type: Number,
    default: null
  },
  owner_01: {
    type: String,
    default: null
  },
  start_date_01: {
    type: String,
    default: null
  },
  end_date_01: {
    type: String,
    default: null
  },
  owner_02: {
    type: String,
    default: null
  },
  start_date_02: {
    type: String,
    default: null
  },
  end_date_02: {
    type: String,
    default: null
  },
  owner_03: {
    type: String,
    default: null
  },
  start_date_03: {
    type: String,
    default: null
  },
  end_date_03: {
    type: String,
    default: null
  }
});
module.exports = mongoose.model('asset', assetSchema);
