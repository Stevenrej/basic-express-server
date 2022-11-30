'use strict';

module.exports = (req, res, next) => {
  if (typeof (req.query.name) === 'string') {
    next();
  } else {
    next('Error no name available');
  }
};

