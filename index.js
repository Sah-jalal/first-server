const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./catagoies.json');

app.get('/', (req, res)=>{
    res.send('hello word')
});

app.get('/news-catagories', (req, res)=>{
    res.send(catagories);
})

app.listen(port, () =>{
    console.log('news server rinning on port ', port)
})