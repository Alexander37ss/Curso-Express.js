function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function handlerErrors(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}


module.exports = {logErrors, handlerErrors}
