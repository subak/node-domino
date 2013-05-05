define(["JQDeferred", "lib/class"], function(Deferred, parent){
  function Task() {
    var deferredObjects = [];

    this.take = function () {
      var df = Deferred();
      deferredObjects.push(df);
      return df;
    };

    this.when = function () {
      var df = Deferred.when.apply(Deferred, deferredObjects);
      df.done(function () {
        deferredObjects = [];
      }.bind(this));
      return df;
    };
  }

  var fn = parent.extends(Task);

  return Task;
});