const express = require('express')
const path  =require('path')
const hbs = require('hbs')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)

const io = socketio(server)
const PORT = process.env.PORT || 3000
app.use(express.json())
const pathdirectories = path.join(__dirname , "../public")
app.use(express.static(pathdirectories))
app.set('view engine', 'hbs')

const temppath = path.join(__dirname , "../templates/views")
app.set('views',temppath)

app.get('',(req,res)=>
{
    res.render('index')
})



////socket part

io.on('connection',(socket)=>{
    console.log('New Connection')
})


server.listen(PORT,()=>{
    console.log("listning on 3000")
})