class Glue
	constructor: (@useCase, @gui, @serverSideAdapter)->
		After(@useCase, "getPersonsList", => @serverSideAdapter.loadPersonsList())
		After(@serverSideAdapter, "personsListLoaded", (list) => @useCase.setPersonsList(list))
		After(@useCase, "setPersonsList", (list) => @gui.showPersonsList(list))

		LogAll(@useCase)
		LogAll(@gui)
		LogAll(@serverSideAdapter)