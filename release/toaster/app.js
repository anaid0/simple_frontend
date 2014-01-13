var App;

App = (function() {

  function App() {
    var glue, gui, serverSideAdapter, useCase;
    useCase = new UseCase();
    window.useCase = useCase;
    gui = new Gui();
    serverSideAdapter = new ServerSideAdapter();
    glue = new Glue(useCase, gui, serverSideAdapter);
    useCase.start();
  }

  return App;

})();

new App();
