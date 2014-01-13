var ServerSideAdapter,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ServerSideAdapter = (function() {

  function ServerSideAdapter() {
    this.buildPersonFromJson = __bind(this.buildPersonFromJson, this);

    this.jsonPersonsListNotLoaded = __bind(this.jsonPersonsListNotLoaded, this);

    this.personsListLoaded = __bind(this.personsListLoaded, this);

    this.jsonPersonsListLoaded = __bind(this.jsonPersonsListLoaded, this);

    this.loadPersonsList = __bind(this.loadPersonsList, this);

  }

  ServerSideAdapter.prototype.loadPersonsList = function() {
    var _this = this;
    console.log("serverSideAdapter.loadPersonsList");
    return $.ajax({
      type: "GET",
      url: "http://simple-backend.shellyapp.com/people.json",
      success: function(listJson) {
        return _this.jsonPersonsListLoaded(listJson);
      },
      error: function() {
        return _this.jsonPersonsListNotLoaded;
      }
    });
  };

  ServerSideAdapter.prototype.jsonPersonsListLoaded = function(jsonPersonsList) {
    var _this = this;
    this.personsListLoaded(jsonPersonsList.map(function(jsonPerson) {
      return _this.buildPersonFromJson(jsonPerson);
    }));
    return console.log("persons list loaded");
  };

  ServerSideAdapter.prototype.personsListLoaded = function(personsList) {};

  ServerSideAdapter.prototype.jsonPersonsListNotLoaded = function() {
    return console.log("persons list not loaded");
  };

  ServerSideAdapter.prototype.buildPersonFromJson = function(jsonPerson) {
    var person;
    return person = new Person(jsonPerson.name, jsonPerson.surname);
  };

  return ServerSideAdapter;

})();
