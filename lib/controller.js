define(["lib/class"], function (parent) {
  function Controller(model) {
    this.model = model;
  }

  var fn = parent.extends(Controller);

  return Controller;  
});