const net = require("net")

let sockets = []

const servidor = net.createServer(socket=>{
    sockets.push(socket)

    socket.write("Estableciendo conexion...\n\r")
    socket.write("Bienvenido!\n\r")
    socket.on("data",data=>{

        // Identificar peopieadades para capturar la direccion ip y el puerto del socket
        let {localAddress,localPort,remoteAddress,remotePort} = socket

        // establecer un nombre aleatorio para cada socket conectado al servidor
        //Math.floor => Redondea para abajo
        //Math.ceil => Redondea para arriba
        //Number.toFixed(cant Number) => Fija la cantidad de decimales al numero especifico por cant
        socket.id = `Socket-${Math.floor(random()*1000)}`

        // guardar cada socket en un array de sockets
        sockets.push(socket)

        // mostrar un mensaje para todos los sockets cada vez que alguien se conecte
        if (sockets.length) {
            sockets.forEach(s=>{
                s.write(`Se ha conectado alguien`)
            })
        }

        socket.on("data",data=>{
            buffer.push(data)
            if(data == "enter"){
                buffer = Buffer.concat(buffer)
                // Acordarse de usar la linea 34 en otra variale o restaurar el valor original de la variable buffer en un array vacio, de lo contrario, el proximo ingreso de data falla ya que la variable no es mas un array sino un Buffer
            }
        })

        
        // let regex = /[\n\r]/
        // if (regex.test(data)) {
        //     console.log("Enter!")
        // }else{
        //     console.log(data)
        // }
    })

})

servidor.listen(9000)

