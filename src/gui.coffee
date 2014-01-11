class Gui
  constructor: ->

  createElementFor: (templateId, data) =>
    source = $(templateId).html()
    template = Handlebars.compile(source)
    html = template(data)
    element = $(html)
  
  showPersonsList: (list) =>
    element = @createElementFor("#persons-list-template", list : list)
    $(".main").append(element)