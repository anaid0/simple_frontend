class UseCase
	constructor: ->
		console.log("UseCase.constructor")
		@persons = []
    
	start: =>
		console.log("UseCase.start")
		@getPersonsList()

	getPersonsList: =>
		console.log("UseCase.getPersonsList")
	setPersonsList: (list) =>
		console.log("UseCase.setPersonsList")
		@persons = list

class Person
	constructor: (@name, @surname) ->
