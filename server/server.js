const app = require('./app');
require('dotenv').config({ path: '.env' });
  
// const port = process.env.APP_PORT || 3000;

const setUpExpress = () => {
  const port = process.env.APP_PORT || 3000;
  
  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
  
  // In case of an error
  app.on('error', (appErr, appCtx) => {
    console.error('app error', appErr.stack);
    console.error('on url', appCtx.req.url);
    console.error('with headers', appCtx.req.headers);
  });
  
  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err) => {
    console.log(chalk.bgRed('UNHANDLED REJECTION! Shutting down...'));
    console.log(err.name, err.message);
    // Close server & exit process
    server.close(() => {
      process.exit(1);
    });
  });
};

setUpExpress();