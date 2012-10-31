var App, twitter;

twitter = twitter || {};

App = (function() {

  function App() {
    this.nav = new twitter.nav;
  }

  App.prototype.show = function() {
    var jade,
      _this = this;
    jade = require("jade");
    return $.get("jade/main.jade", function(content) {
      $("body").html(jade.compile(content));
      _this.nav.bindEvents();
      return _this.nav.changeState("timeline");
    });
  };

  return App;

})();

$(function() {
  var app;
  app = new App;
  return app.show();
});
