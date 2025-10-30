const express = require('express')
const app = express()
const PORT = process.env.port || 3000

app.get('/',(req,res)=>{
    res.send('Hello , Render')
})

app.listen(PORT,()=>{
    console.log(`The Server is runing on : ${PORT}`)
})