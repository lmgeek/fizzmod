const mysql = require("mysql")
const io = require("socket.io")
const http = require("http")
const fs = require("fs")
const template = require("./template")

const connection = mysql.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "",
    database : "pepe"
})
//Desde la variable quie mantiene la conexion sale siempre un metodo llamado query que es la que permite ejecutar asincronicamente cada consulta a la BD

const server = http.createServer((req,res)=>{
    /*
    --1) Promer Ejemplo :
    //cuando se importa el cliente desde un archivo local
    let {url} =req
    if (url == "/socket.client.js" ){
        let script = fs.createReadStream(__dirname+"/socker.client.js")
        res.writeHead(200,{"content-type":"application/javascript"})
        script.pipe(res)
    }else {
        res.end("Hola Mundo")
    }*/
    
    /*
    --2) Segundo Ejemplo*/
    //const socket = require('socket.client')



    /*
    --3) Tercer Ejemplo*/
    res.writeHead(200,{"content-type":"text/html"})
    res.end(template)

    
})

/**
 * 
 * socket.io-client : Es el paquete de npm para WebSockets de clientes
 * puede usarse en el html client dentro de un script link desde cdn
 * 
 */
