'use strict';

// The Package is past automatically as first parameter
module.exports = function(Photos, app, auth, database) {

  app.get('/photos/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/photos/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/photos/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/photos/example/render', function(req, res, next) {
    Photos.render('index', {
      package: 'photos'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
