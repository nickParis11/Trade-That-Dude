var express=require('express');
var bodyParser=requre('body-parser');

var app=express();

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'))

app.get('/players',(req,res)=>{
  //********
});
app.post('/newplayer',(req,res){
  if (err) {
    res.sendStatus(404);
  }
  //******************
});

app.listen(7500,'127.0.0.1');

// lookup bodyP.json()

