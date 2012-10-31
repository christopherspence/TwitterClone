twitter = twitter || {}

class App
	constructor: -> 
		@nav = new twitter.nav
		
	show: -> 
		jade = require "jade"
		$.get "jade/main.jade", (content) =>		
			$("body").html jade.compile content	
			@nav.bindEvents()
			@nav.changeState "timeline"


$ -> 
	app = new App
	app.show()
	

		
		