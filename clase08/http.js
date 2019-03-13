const http = require("http")
const Url = require("url")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    //Morgan = Esun logger
    //version http - metodo - url = ?
    let {httpVersion,method,url} = req
    console.log(`HTTP ${httpVersion} - ${method} - ${url}`)
    //Express = es un framework para crear servidores en node
    //Body-Parser = bosyççdy parsea la data entrante desde el cliente
    //Multer =

    //console.log(Url.parse(url,true))
    let parse_url = Url.parse(url,true)
    let {nombre} = parse_url.query
    console.log(nombre)
    
    let buffer = []
    let buffer_end

    req.on("data", chunk=>{
        buffer.push(chunk)
    })
    
    //Enviar desde el navegador - console
    /*fetch("htto://localhost:8000",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({x:1})
    })*/
//Revibe la respuesta deade el navegador
    req.on("end",()=>{
        buffer_end = Buffer.concat(buffer)
        console.log(buffer_end.toString())
        buffer = []
    })
    
    let archivo = fs.createReadStream(__dirname+"/index.html")
    res.writeHead(200,{"content-type":"text/html"})
    archivo.pipe(res)
    //res.end("hola Mundo")
})


server.listen(8000,()=>{
    console.log("Servidor Encendido")
})

/**
 * 
 * fetch + header + body+stringify : OK
 * fetch + body : [object Object]
 * fetch + body+stringify : pseudo OK - Necesitas siempre decirle 
 * 
 * Asignacion Final :
 * Tablas
 *      Usuarios
 *          id
 *          nombre
 *          usuario
 *          created_at
 *          updated_at
 * 
 *      Mensajes
 *          id
 *          creayed_at
 *          updated_at
 *          status
 *          mensaje
 * 
 * 
 * Microservicios : 
 * Websocket
 * HTTP
 * 
 * Front :
 * -Registro
 * -index
 * 
 */