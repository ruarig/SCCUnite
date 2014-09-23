'use strict';

// The Package is past automatically as first parameter
module.exports = function(News, app, auth, database) {

  app.get('/news/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/news/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/news/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/news/example/render', function(req, res, next) {
    News.render('index', {
      package: 'news'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
