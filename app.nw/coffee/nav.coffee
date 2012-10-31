twitter = twitter || {}

class twitter.nav 
	currentState = null
	
	states = 
		timeline: 
			inactive: 'menu-timeline-gray',
			active: 'menu-timeline-blue',
			hover: 'menu-timeline-white'
		mentions:
			inactive: 'menu-mentions-gray',
			active: 'menu-mentions-blue',
			hover: 'menu-mentions-white'
		messages:
			inactive: 'menu-messages-gray',
			active: 'menu-messages-blue',
			hover: 'menu-messages-white'
		lists:
			inactive: 'lists',
			active: 'lists',
			hover: 'lists'
		profile:
			inactive: 'person',
			active: 'person',
			hover: 'person'
		search:
			inactive: 'magnifying-glass',
			active: 'magnifying-glass',
			hover: 'magnifying-glass'
			
	bindEvents: ->
		for state of states
			$("##{state}Btn").mouseover ->
				if $(this).attr('data-type') is currentState
					return
					
				$(this).attr("src", "images/#{states[$(this).attr('data-type')].hover}.png")
				
			$("##{state}Btn").mouseout ->
				if $(this).attr('data-type') is currentState
					return
				
				$(this).attr("src", "images/#{states[$(this).attr('data-type')].inactive}.png")
			
	changeState: (state) ->
		currentState = state
		
		switch state
			when "timeline", "mentions", "messages", "lists", "profile", "search"
				$("##{state}Btn").attr("src", "images/#{states[state].active}.png")
			else
				alert "WTF?"