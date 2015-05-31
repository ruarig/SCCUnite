'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Team = new Module('team');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Team.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Team.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Team.menus.add({
    'roles': ['anonymous'],
    'title': 'SCC Committee',
    'link': 'team',
    'order' : '1',
  });

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Team.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Team.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Team.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Team;
});
