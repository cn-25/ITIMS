var express = require('express');
var router = express.Router();
var asset = require("../controllers/assetController.js");

// Get all assets
router.get('/', function(req, res) {
  asset.list(req, res);
});

// Get single asset by id
router.get('/show/:id', function(req, res) {
  asset.show(req, res);
});

// Get Metrics
router.get('/metrics', function (req, res) {
  asset.Metrics(req, res)
})

// Get Export
router.get('/export', function (req, res) {
  asset.Export(req, res)
})

// Add asset
router.get('/create', function(req, res) {
  asset.create(req, res);
});

// Save asset
router.post('/save', function(req, res) {
  asset.save(req, res);
});

// Edit asset
router.get('/edit/:id', function(req, res) {
  asset.edit(req, res);
});

// Edit update #2
router.post('/update_2/:id', function(req, res) {
  asset.update_2(req, res);
});

// Edit update #3
router.post('/update_3/:id', function(req, res) {
  asset.update_3(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  asset.delete(req, res);
});



module.exports = router;
