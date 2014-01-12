#<< utils
#<< local_storage
#<< use_case
#<< gui
#<< server_side_adapter
#<< glue
class App
  constructor: ->
    useCase = new UseCase()
    window.useCase = useCase
    gui = new Gui()
    serverSideAdapter = new ServerSideAdapter()
    glue = new Glue(useCase, gui, serverSideAdapter)
    useCase.start()

new App()
