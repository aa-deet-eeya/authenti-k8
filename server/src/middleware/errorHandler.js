module.exports = (err, req, res, next) => {
  // development error handler
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      console.log("Error!!!!!\n", err);
      res.status(err.status || 500);
      res.json(err);
    });
  }

  // production error handler
  app.use((err, req, res, next) => {
    res.status(err.status);
    delete err.details;
    res.json(err);
  });
};