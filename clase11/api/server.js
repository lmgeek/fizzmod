//aframe.io  360 image

const express=require('express'),
    bodyParser = require('body-parser'),
    app=express(),
    port=process.env.PORT||3000;

const jsonParser = bodyParser.json();
const productsRouter=express.Router();


productsRouter.post('/add',jsonParser,function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    console.log(req.body)
    res.end(JSON.stringify({ status: 'ok', msj: req.body }));
    // let body = '';
    // req.on('data', chunk => {
    //     body += chunk.toString();
    // });
    // req.on('end', () => {
    //     console.log(body);
    //     res.end(JSON.stringify({ status: 'ok', msj: body }));
    // });
    // res.send(JSON.stringify({ status: 'ok' , msj: req.body}));
});
app.use('/products',productsRouter);

app.listen(port,function(){
    console.log('your server is running');
});