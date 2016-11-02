var page = require('page'),
    Handlebars = window.Handlebars,
    $ = window.$;

/**
 * Routes
 */

page('/', function() {
  console.log('cool');
  $('body').addClass('tutors');
});

page('/my-work', function() {
  var source = $("#my-work").html(); 
  var template = Handlebars.compile(source); 
});