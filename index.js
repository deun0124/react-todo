const express = require('express')
const app = express()



const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true  }))
app.use(bodyParser.json())

const fs = require('fs');
const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data);


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


app.post('/api/add',(req, res)=>{

  console.log(req.content)


  let sql='insert into todo values(null,?,0)';
 
  let content =req.body;
let params = [content]
  
 
 
  
  conn.query(sql, params,
    (err, rows, fields)=>{
      res.send(rows);
    })

    
})

// app.post('/api/todolist',(req, res)=>{
//   let sql = "insert into todo values(0,?,0)"
//   let content = req.body;
//   let params = [content]

//   console.log(content)
//   conn.query(sql, params,
//     (err, rows, fields)=>{
//       res.send(rows)
//     })
// })


const port = process.env.PORT || 5000
app.listen(port, ( )=>console.log(`listening on port ${port}`))