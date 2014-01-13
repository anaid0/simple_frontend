var Glue;

Glue = (function() {

  function Glue(useCase, gui, serverSideAdapter) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    this.serverSideAdapter = serverSideAdapter;
    After(this.useCase, "getPersonsList", function() {
      return _this.serverSideAdapter.loadPersonsList();
    });
    After(this.serverSideAdapter, "personsListLoaded", function(list) {
      return _this.useCase.setPersonsList(list);
    });
    After(this.useCase, "setPersonsList", function(list) {
      return _this.gui.showPersonsList(list);
    });
    LogAll(this.useCase);
    LogAll(this.gui);
    LogAll(this.serverSideAdapter);
  }

  return Glue;

})();
