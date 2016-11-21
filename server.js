var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

// Settings
app.set("view engine", "ejs");
app.set("views", "./app");

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.render("index")
})

app.listen(port, function () {
  console.log("listening on port:", port);
  console.log("directory:", __dirname);
});
