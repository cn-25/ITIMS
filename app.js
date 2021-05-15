var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const Json2csvParser = require('json2csv').Parser;
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/asset')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var index = require('./routes/index');
var assets = require('./routes/assets');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/assets', assets);

app.get('/download', function (req, res) {

  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    
    let dbo = db.db("asset");
    
    dbo.collection("assets").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    
    // -> Convert JSON to CSV data
    const csvFields = ['_id', 'type', 'owner', 'date','value'];
    const json2csvParser = new Json2csvParser({ csvFields });
    const csv = json2csvParser.parse(result);

    console.log(csv);
    
    fs.writeFile('customer.csv', csv, function(err) {
      if (err) throw err;
      console.log('file saved');
      res.attachment('itims-export.csv');
      res.status(200).send(csv);
    });
      db.close();
    });
  });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
