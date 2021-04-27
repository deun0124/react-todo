const express = require('express')
const app = express()





app.use(express.json())

const fs = require('fs');
const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data);
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true  }))
app.use(bodyParser.json())

var mysql = require('mysql')
var conn = mysql.createConnection({
  hsot : conf.host,
  user : conf.user,
  password : conf.password,
  database : conf.database
})

conn.connect();


app.get('/api/todolist',(req, res) =>{
  conn.query(
    "select * from todo",
    (err, rows, fields) =>{
      res.send(rows)
    
    }
  )
})


app.post('/api/todolist',function(req, res){

  console.log(req.body)


  let sql='insert into todo values(null,?,0)';
 
  let content =req.body.content;
let params = [content]
  
 
 
  
  conn.query(sql, params,
    (err, rows, fields)=>{
      res.send(rows);
    })

    
})



app.delete('/api/completed/:id',(req, res)=>{
  let sql = 'update todo set status=1 where id=?';
  let params =[req.params.id];
  console.log(params)
  conn.query(sql, params,
    (err, rows, fields)=>{
      res.send(rows);
    })

})

const port = process.env.PORT || 5000
app.listen(port, ( )=>console.log(`listening on port ${port}`))