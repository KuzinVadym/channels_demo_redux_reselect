"use strict";

module.exports = (req, res, next) => {
  for (let param in req.params) {
    if (Object.prototype.hasOwnProperty.call(req.params, param)) {
      if (!(res.locals[param] === req.params[param])) {
        res.locals[param] = req.params[param];
      }
    }
  }

  next();
};