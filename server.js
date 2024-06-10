const app = require('express')();

app.get('/', (req, res) => res.send('Bot Gestartet'));

module.exports = () => {
  app.listen(3000);
}