define(["events", "lib/class"], function (events, Class) {
  /**
   * ここでメソッドを定義する
   * 非同期メソッドの結果を set() で収める
   * 一つ目がこのモデルのプロパティ
   * TODO: エラー発生時のイベントを提供する
   * @constructor
   */
  function Model () {
    var self = this;
    var dependencies = Array.prototype.slice.apply(arguments);
    var value = dependencies[0];

    dependencies.forEach(function(e, i, a) {
      if (e instanceof Model) {
        e.on("set", function (newValue, oldValue) {
          self.emit("set", newValue, oldValue, this.constructor);
        });
      }
    });

    /**
     * @returns {*}
     */
    this.get = function () {
      //this.emit("get");
      return (value instanceof Model) ? value.get() : value;
    };

    /**
     * TODO: json schemaのvalidatorもここで入れるとか
     * schemaに失敗してたらBoolean
     * @param newValue
     * @returns {*}
     */
    this.set = function (newValue) {
      var oldValue = value;
      value = newValue;
      this.emit("set", newValue, oldValue, this.constructor);
    };
  }

  Class.extends(Model);
  var fn = Class.extends.apply(events.EventEmitter, [Model]);

  return Model;
});