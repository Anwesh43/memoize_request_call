const express = require('express')
const server = express()
server.get('/blockCertainThing',(req,res)=>{
    console.log("hitting the server")
    setTimeout(()=>{
        res.json({status:'ok'})
    },3000)
})
server.listen(8000,()=>{
    console.log('listening in port 8000')
})
