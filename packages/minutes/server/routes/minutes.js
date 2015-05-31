'use strict';

// The Package is past automatically as first parameter
module.exports = function(Minutes, app, auth, database) {

  app.get('/minutes/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/minutes/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/minutes/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/minutes/example/render', function(req, res, next) {
    Minutes.render('index', {
      package: 'minutes'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
