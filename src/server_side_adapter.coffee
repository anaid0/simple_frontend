class ServerSideAdapter
	constructor: ->

	loadPersonsList: =>
		console.log("serverSideAdapter.loadPersonsList")
		$.ajax(
			type: "GET"
			url: "http://simple-backend.shellyapp.com/people.json"
			success: (listJson) =>
				@jsonPersonsListLoaded(listJson)
			error: => 
				@jsonPersonsListNotLoaded
		)

	jsonPersonsListLoaded: (jsonPersonsList) =>
		@personsListLoaded(jsonPersonsList.map((jsonPerson) => @buildPersonFromJson(jsonPerson)))
		console.log("persons list loaded")

	personsListLoaded: (personsList) =>

	jsonPersonsListNotLoaded: =>
		console.log("persons list not loaded")

	buildPersonFromJson: (jsonPerson) =>
		person = new Person(jsonPerson.name, jsonPerson.surname)
