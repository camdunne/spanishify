var Thing = require('./models/thing.js');

module.exports = function(app) {
  //sample API routes
  app.get('/api/nerds', function(req, res) {
    Thing.find(function(err, nerds) {
      if (err)
        res.send(err);
      res.json(nerds);
    });
  });

  // app.post
  // app.delete

  //all angular requests
  app.get('*', function(req, res) {
    res.sendfile('../../../client/public/views/index.html')
  })
}
