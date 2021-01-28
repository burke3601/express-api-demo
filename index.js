const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const morgan = require('morgan');
const logger = morgan('dev');

let number = 3;

app.use(logger);

app.get('/api', (req,res) =>{
    res.json({
        status: "hello world!!!!!!!!",
        little: "diddy",
        anotherOne: "full stack alert"

    })
});

app.get('/api/counter', (req,res) => {
    res.json({
        value:number
    })
});
app.post('/api/counter', (req,res) => {
    number++;
    res.json({
        status: 'incremented',
        value: number
    })
});

//subtract 1
app.put('/api/counter', (req, res)=> {
    number--;
    res.json({
        status: 'decremented',
        value: number
    })
})

app.delete('/api/counter', (req,res)=> {
    number = 0;
    res.json({
        status: 'reset',
        value:number
    })
})

server.listen(7000, () => {
    console.log(`Express API listening at 7000`)
})