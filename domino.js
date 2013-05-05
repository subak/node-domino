exports.routes = {
  railsRestStyle: require("./config/routes")
}

var requirejs = require("requirejs");
if (typeof define !== 'function') { var define = require('amdefine')(module) }
requirejs.config({
  baseUrl: __dirname,
  nodeRequire: require
});

exports.Application = requirejs("lib/application");
exports.Controller = requirejs("lib/controller");
exports.Model = requirejs("lib/model");
exports.Router = requirejs("lib/router");
exports.Task = requirejs("lib/task");
exports.View = requirejs("lib/view");
