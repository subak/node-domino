/**
 * .. table: REST API
 * ======== ======= ==============
 * index    GET     /scope
 * show     GET     /scope/:id
 * new      GET     /scope/new
 * edit     GET     /scope/:id/edit
 * create   POST    /scope
 * update   PUT     /scope/:id
 * destroy  DELETE  /scope/:id
 * ======== ======= ==============
 */
define(["xregexp", "lib/class"], function (xregexp, parent) {
  function Router() { }

  var fn = parent.extends(Router);

  fn.detectRoute = function (method, pathname, routes) {
    var target = method + " " + pathname,
      action, match, res;

    res = routes.some(function (route) {
      action = route.action;
      match = xregexp.XRegExp.exec(target, xregexp.XRegExp(route.pattern));
      return match !== null;
    });

    return res ? {action: action, match: match} : null;
  };

  return Router;
});