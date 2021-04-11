let express = require('express');
let axios = require('axios');

let app = express()

app.get('/',(req,res)=>{
    res.send('apiServer')
})

app.get('/api/index',(req,res)=>{
    res.json();
})

app.listen(8000,()=>{
    console.log('server start','http://localhost:4200')
})