let express = require('express');
let axios = require('axios');

let app = express()

app.get('/',(req,res)=>{
    res.send('apiServer')
})

app.get('/api/index',async (req,res)=>{
    res.append('Access-Control-Allow-Origin',"*")
    res.append('Access-Control-Allow-Content-Type',"*")
    
    let httpUrl = 'https://media.nationalgeographic.org/assets/photos/000/213/21363.jpg'
    let result = await axios.get(httpUrl);
    
    res.json(result.data);
})

app.listen(4200,()=>{
    console.log('server start','http://localhost:8080')
})