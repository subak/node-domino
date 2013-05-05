define(function () {
  function Class () { }

  Class.extends = function ( klass ) {
    klass.prototype = Object.create(this.prototype);

    klass.prototype.constructor = klass;
    klass.prototype.parent = this;

    Object.getOwnPropertyNames(this).forEach(function(element, index, array) {
      // TODO: 同名プロパティの上書きができない
      if ( !klass.hasOwnProperty(element) ) {
        klass[element] = this[element];
      }
    }, this);
    
    return klass.prototype;
  };

  return Class;
});