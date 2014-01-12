class Gui
	constructor: ->
		console.log("Gui.constructor")

	createElementFor: (templateId, data) =>
		console.log("Gui.createElementFor")
		source = $(templateId).html()
		template = Handlebars.compile(source)
		html = template(data)
		element = $(html)
  
	showPersonsList: (list) =>
		console.log("Gui.showPersonsList")
		element = @createElementFor("#persons-list-template", list : list)
		$(".main").append(element)