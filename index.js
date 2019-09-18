var express = require('express');
var app = express();
const PORT = 3000;
app.get('/', function (req, res) {
res.send('Hola mundo desde el sena');
});
app.listen(3000, function () {
console.log(`Server running at port ${PORT}`);
});

app.get('/about', function (req, res) {
    res.send('about');
  });
  app.route('/book')
  .get(function(req, res) {
    res.json({ user: 'tobi' })
})
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });