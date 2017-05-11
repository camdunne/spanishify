var todoHelper = require('../utils/todoHelper.js');

module.exports = function(app, express) {
  app.get('/todo', todoHelper.getTodo),
  app.post('/delete', todoHelper.delete),
  app.post('/todo', todoHelper.postTodo);
};
