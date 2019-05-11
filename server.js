
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/heroicon-app'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/heroicon-app/index.html');
});

app.listen(process.env.PORT || 8080);