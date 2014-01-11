class Glue
  constructor: (@useCase, @gui, @serverSideAdapter)->
    After(@useCase, "getPersonsList", => @server_side_adapter.loadPersonsList())
    After(@useCase, "setPersonsList", (list) => @gui.showPersonsList(list))
    
    After(@serverSideAdapter, "personsListLoaded", (list) => @useCase.setPersonsList(list))

    LogAll(@useCase)
    LogAll(@gui)
    LogAll(@serverSideAdapter)