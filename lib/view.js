define(["lib/class"], function (parent) {
  function View(model) {
    parent.apply(this, arguments);

    var subViews = {};

    this.getSubView = function (viewName) {
      var view = subViews[viewName];
      if ( !view ) {
        throw new Error("view missing.");
      }
      return view;
    };

    this.setSubView = function (viewName, view) {
      return subViews[viewName] = view;
    };

    var product;
    this.product = function () {
      return product;
    };

    var render = this.render;
    this.render = function () {
      return product = render.apply(this, arguments);
    };

    model.on("set", this.render.bind(this));
    this.model = model;
  }
  
  var fn = parent.extends(View);
  
  fn.render = function () {  };
  
  return View;
});
