var mongoose = require("mongoose");
var Asset = require("../models/asset");

var assetController = {};

// Show list of assets
assetController.list = function(req, res) {
  Asset.find({}).exec(function (err, assets) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/assets/index", {assets: assets});
    }
  });
};

// Show asset by id
assetController.show = function(req, res) {
  Asset.findOne({_id: req.params.id}).exec(function (err, asset) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/assets/show", {asset: asset});
    }
  });
};

// Show metrics of assets
assetController.Metrics = function(req, res) {
  Asset.find({}).exec(function (err, assets) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/assets/metrics", {assets: assets});
    }
  });
};

// Show export options for assets
assetController.Export = function(req, res) {
  Asset.find({}).exec(function (err, assets) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/assets/export", {assets: assets});
    }
  });
};

// Create new asset
assetController.create = function(req, res) {
  Asset.find({}).exec(function (err, assets) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("../views/assets/create", {assets: assets});
    }
  });
};

// Save new asset
assetController.save = function(req, res) {
  var asset = new Asset(req.body);

  asset.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/assets/create");
    } else {
      console.log("Successfully created an asset.");
      res.redirect("/assets/show/"+asset._id);
    }
  });
};

// Edit an asset
assetController.edit = function(req, res) {
  Asset.findOne({_id: req.params.id}).exec(function (err, asset) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/assets/edit", {asset: asset});
    }
  });
};

// Update for Owner 2
assetController.update_2 = function(req, res) {
  Asset.findByIdAndUpdate(req.params.id, { $set: { owner_02: req.body.owner_02, start_date_02: req.body.start_date_02, end_date_01: req.body.end_date_01 }}, { new: true }, function (err, asset) {
    if (err) {
      console.log(err);
      res.render("../views/assets/edit", {asset: req.body});
    }
    res.redirect("/assets/show/"+asset._id);
  });
};

// Update for Owner 3
assetController.update_3 = function(req, res) {
  Asset.findByIdAndUpdate(req.params.id, { $set: { owner_03: req.body.owner_03, start_date_03: req.body.start_date_03, end_date_02: req.body.end_date_02 }}, { new: true }, function (err, asset) {
    if (err) {
      console.log(err);
      res.render("../views/assets/edit", {asset: req.body});
    }
    res.redirect("/assets/show/"+asset._id);
  });
};

// Delete an asset
assetController.delete = function(req, res) {
  Asset.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("asset deleted!");
      res.redirect("/assets");
    }
  });
};

module.exports = assetController;
