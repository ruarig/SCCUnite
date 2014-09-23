'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var News = new Module('news');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
News.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  News.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  News.menus.add({
    title: 'news example page',
    link: 'news example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    News.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    News.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    News.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return News;
});
