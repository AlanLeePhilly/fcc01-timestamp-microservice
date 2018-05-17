var express = require('express');
var app = express();
app.use(express.static('public'));

app.get("/:date", function (req, res) {
  var uDate, nDate;
  if(!isNaN(req.params.date)){
    uDate = req.params.date
    nDate = toNatDate(uDate)
    } else {
      uDate = Date.parse(req.params.date);
      nDate = req.params.date
    }
  
  res.json({"unix": uDate, "natural": nDate});
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function toNatDate(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}