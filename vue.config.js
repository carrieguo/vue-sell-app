module.exports = {
    publicPath: './',
    // devServer: {
    //   proxy: 'http://localhost:9000/api/'
    // }
    devServer: {
      before: function(app, server) {
        app.get('/some/path', function(req, res) {
          res.json({ custom: 'response' });
        });
      }
    }
  }