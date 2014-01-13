var Person, UseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

UseCase = (function() {

  function UseCase() {
    this.setPersonsList = __bind(this.setPersonsList, this);

    this.getPersonsList = __bind(this.getPersonsList, this);

    this.start = __bind(this.start, this);
    console.log("UseCase.constructor");
    this.persons = [];
  }

  UseCase.prototype.start = function() {
    console.log("UseCase.start");
    return this.getPersonsList();
  };

  UseCase.prototype.getPersonsList = function() {
    return console.log("UseCase.getPersonsList");
  };

  UseCase.prototype.setPersonsList = function(list) {
    console.log("UseCase.setPersonsList");
    return this.persons = list;
  };

  return UseCase;

})();

Person = (function() {

  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  return Person;

})();
