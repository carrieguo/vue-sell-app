var appData = require('./public/data/test.json');
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

module.exports = {
    publicPath: './',
    // devServer: {
    //   proxy: 'http://localhost:9000/api/'
    // }
    devServer: {
      before: function(app, server) {
        app.get('/seller', function(req, res) {
          res.json({
            errno: 0,
            data: seller
          });
        });
        app.get('/goods', function(req, res) {
          res.json({
            errno: 0,
            data: goods
          });
        });
        app.get('/ratings', function(req, res) {
          res.json({
            errno: 0,
            data: ratings
          });
        });
      }
    }
  }