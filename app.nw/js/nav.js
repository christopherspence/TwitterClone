var twitter;

twitter = twitter || {};

twitter.nav = (function() {
  var currentState, states;

  function nav() {}

  currentState = null;

  states = {
    timeline: {
      inactive: 'menu-timeline-gray',
      active: 'menu-timeline-blue',
      hover: 'menu-timeline-white'
    },
    mentions: {
      inactive: 'menu-mentions-gray',
      active: 'menu-mentions-blue',
      hover: 'menu-mentions-white'
    },
    messages: {
      inactive: 'menu-messages-gray',
      active: 'menu-messages-blue',
      hover: 'menu-messages-white'
    },
    lists: {
      inactive: 'lists',
      active: 'lists',
      hover: 'lists'
    },
    profile: {
      inactive: 'person',
      active: 'person',
      hover: 'person'
    },
    search: {
      inactive: 'magnifying-glass',
      active: 'magnifying-glass',
      hover: 'magnifying-glass'
    }
  };

  nav.prototype.bindEvents = function() {
    var state, _results;
    _results = [];
    for (state in states) {
      $("#" + state + "Btn").mouseover(function() {
        if ($(this).attr('data-type') === currentState) return;
        return $(this).attr("src", "images/" + states[$(this).attr('data-type')].hover + ".png");
      });
      _results.push($("#" + state + "Btn").mouseout(function() {
        if ($(this).attr('data-type') === currentState) return;
        return $(this).attr("src", "images/" + states[$(this).attr('data-type')].inactive + ".png");
      }));
    }
    return _results;
  };

  nav.prototype.changeState = function(state) {
    currentState = state;
    switch (state) {
      case "timeline":
      case "mentions":
      case "messages":
      case "lists":
      case "profile":
      case "search":
        return $("#" + state + "Btn").attr("src", "images/" + states[state].active + ".png");
      default:
        return alert("WTF?");
    }
  };

  return nav;

})();
