var Gui,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Gui = (function() {

  function Gui() {
    this.showPersonsList = __bind(this.showPersonsList, this);

    this.createElementFor = __bind(this.createElementFor, this);
    console.log("Gui.constructor");
  }

  Gui.prototype.createElementFor = function(templateId, data) {
    var element, html, source, template;
    console.log("Gui.createElementFor");
    source = $(templateId).html();
    template = Handlebars.compile(source);
    html = template(data);
    return element = $(html);
  };

  Gui.prototype.showPersonsList = function(list) {
    var element;
    console.log("Gui.showPersonsList");
    element = this.createElementFor("#persons-list-template", {
      list: list
    });
    return $(".main").append(element);
  };

  return Gui;

})();
