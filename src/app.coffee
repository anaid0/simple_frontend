#<< utils
#<< local_storage
#<< use_case
#<< gui
#<< server_side_adapter
#<< glue

class App
  constructor: ->
    useCase      = new UseCase()
    gui          = new Gui()
    serverSideAdapter = new serverSideAdapter()
    glue         = new Glue(useCase, gui, serverSideAdapter)
    
    useCase.start()
    window.useCase = useCase

new App()

