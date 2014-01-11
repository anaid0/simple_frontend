class UseCase
  constructor: ->
    @persons = []
    
  start: =>
    @getPersonsList()

  getPersonsList: =>

  setPersonsList: (list) =>
    @persons = list

class Person
  constructor: (@name, @surname) ->
