'use strict';

// The Package is past automatically as first parameter
module.exports = function(Team, app, auth, database) {

  app.get('/team/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/team/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/team/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/team/example/render', function(req, res, next) {
    Team.render('index', {
      package: 'team'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
