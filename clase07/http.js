const http = require("http")
const fs = require("fs")

const servidor = http.createServer((req,res)=>{
    //Es indispensable que una conexion HTTP termine la escritura del socket con Socket.end
    // res.write("Hola")
    // res.write("Mundo")
    //Timeout default => 2m = 120000 ms
    // setTimeout(()=>{
    //     res.end("!")
    // },3000)
    //Content-Type : Determina que tipo de recurso esta impactando en el cliente

    /**
     * CLIENTE > SERVIDOR
     * multipart/formdata
     * application/x-www-url-encoded
     * 
     * SERVIDOR > CLIENTE
     * text/html
     * text/plain
     * text/css
     * application/json
     * application/javascript
     * image/jpg
     * image/png
     * image/gif
     * video/mp4
     * video/webm
     * audio/ogg
     * audio/mp3
     */
    //Por defecto el codigo de status de HTTP en Node siempre es 200 hata que le digamos lo contrairo.(forma indirecta de setear el codigo HTTP)
    // res.statusCode = 200
    // res.setHeader("Content-Type","text/html")

    //Forma directa de setear el codigo HTTP y no bufferearlas
    // res.writeHead(404,"Internal Server Error",{"Content-Type":"text/html"})
    // res.end("<h1>Hola Mundo.!</h1>")

    // fs.readFile(`${__dirname}/index.html`,(err,data)=>{
    fs.readFile(`${__dirname}/Pexels.mp4`,(err,data)=>{
        if (err) {
            console.error(err)
            res.writeHead(500,"Internal Server Error")
            res.end(err.message)
        } else{
            res.writeHead(200,{"content-type":"video/mp4"})
            res.end(data)
        }
        
    })

})

servidor.listen(8000)

// servidor.on("error",()=>{})

/**maidsafe
 * Aplicacion = HTTTP / SSH / FTP / SMTP / stc...
 * Transporte = TCP
 * Red        = IPV4/IPV6 
 * 
 */